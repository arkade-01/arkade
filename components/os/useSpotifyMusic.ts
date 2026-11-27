"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Minimal typings for the Spotify iFrame API
// (https://developer.spotify.com/documentation/embeds/references/iframe-api).
type PlaybackUpdate = { data: { isPaused: boolean; isBuffering: boolean; position: number; duration: number } };
type EmbedController = {
  play(): void;
  resume(): void;
  pause(): void;
  destroy(): void;
  addListener(event: "ready", cb: () => void): void;
  addListener(event: "playback_update", cb: (e: PlaybackUpdate) => void): void;
};
type IFrameAPI = {
  createController(
    el: HTMLElement,
    options: { uri: string; width: string | number; height: string | number; theme?: "dark" },
    cb: (controller: EmbedController) => void,
  ): void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: IFrameAPI) => void;
  }
}

let apiPromise: Promise<IFrameAPI> | null = null;

function loadApi(): Promise<IFrameAPI> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    const prev = window.onSpotifyIframeApiReady;
    window.onSpotifyIframeApiReady = (api) => {
      prev?.(api);
      resolve(api);
    };
    const s = document.createElement("script");
    s.src = "https://open.spotify.com/embed/iframe-api/v1";
    s.async = true;
    document.head.appendChild(s);
  });
  return apiPromise;
}

/**
 * Creates the official Spotify embed inside `host` on page load and exposes
 * play/pause. `start()` is safe to call synchronously from a user gesture
 * before the embed is ready: the intent is remembered and honoured on "ready".
 */
export function useSpotifyMusic(trackId: string, host: React.RefObject<HTMLDivElement>, onPlaying: () => void) {
  const controller = useRef<EmbedController | null>(null);
  const ready = useRef(false);
  const pendingStart = useRef(false);
  const startedOnce = useRef(false);
  const status = useRef({ isPaused: true, isBuffering: false });
  const onPlayingRef = useRef(onPlaying);
  onPlayingRef.current = onPlaying;

  const [playing, setPlaying] = useState(false);

  // First play starts the track; after that, resume from where it paused.
  const go = useCallback((c: EmbedController) => {
    if (startedOnce.current) c.resume();
    else {
      startedOnce.current = true;
      c.play();
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadApi().then((api) => {
      if (cancelled || !host.current) return;
      // The API replaces this element with its iframe; React never renders
      // children into `host`, so it won't fight over the node.
      const el = document.createElement("div");
      host.current.appendChild(el);
      api.createController(el, { uri: `spotify:track:${trackId}`, width: "100%", height: "100%", theme: "dark" }, (c) => {
        if (cancelled) return c.destroy();
        controller.current = c;
        c.addListener("ready", () => {
          ready.current = true;
          if (pendingStart.current) {
            pendingStart.current = false;
            go(c);
          }
        });
        c.addListener("playback_update", (e) => {
          const wasPlaying = !status.current.isPaused;
          status.current = { isPaused: e.data.isPaused, isBuffering: e.data.isBuffering };
          const now = !e.data.isPaused;
          setPlaying(now);
          if (now && !wasPlaying) onPlayingRef.current();
        });
      });
    });
    return () => {
      cancelled = true;
      controller.current?.destroy();
      controller.current = null;
      ready.current = false;
    };
  }, [trackId, host, go]);

  /** Play now if ready, otherwise as soon as the embed is ready. */
  const play = useCallback(() => {
    if (ready.current && controller.current) go(controller.current);
    else pendingStart.current = true;
  }, [go]);

  const pause = useCallback(() => {
    pendingStart.current = false;
    if (ready.current) controller.current?.pause();
  }, []);

  const isPlaying = useCallback(() => !status.current.isPaused, []);
  /** Playing, or buffering on its way to playing (autoplay wasn't blocked). */
  const isStarting = useCallback(() => !status.current.isPaused || status.current.isBuffering, []);

  return { playing, start: play, play, pause, isPlaying, isStarting };
}
