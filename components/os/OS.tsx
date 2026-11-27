"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BOOT_SCREEN, MUSIC, PHOSPHOR, PHOSPHORS, TELEGRAM, desktop } from "@/data/site";
import { getProject, hostOf } from "@/data/projects";
import { getPost, formatDate } from "@/data/journal";
import { PAGES, parseRoute, type PageKey, type WinSpec } from "./routes";
import { MusicIcon, PAGE_ICONS, SpeakerIcon, WarningIcon } from "./icons";
import Window, { type Crumb } from "./Window";
import { AboutPage, ContactPage, CvPage, JournalPage, PostPage, ProjectPage, ServicesPage, WorkPage } from "./pages";
import { useSpotifyMusic } from "./useSpotifyMusic";
import "./os.css";

const TITLES: Record<PageKey, string> = {
  work: "Work",
  about: "About me",
  services: "Services",
  journal: "Journal",
  contact: "New message",
  cv: "CV",
};
const CRUMBS: Record<PageKey, string> = {
  work: "Work",
  about: "About me",
  services: "Services",
  journal: "Journal",
  contact: "Contact",
  cv: "CV",
};
const FOOTS: Record<PageKey, string> = {
  work: "Newest first",
  about: "Replies on Telegram",
  services: "Open for new projects",
  journal: "Newest first",
  contact: "Replies on Telegram",
  cv: "PDF available",
};
const WIDTHS: Record<PageKey, number> = { work: 780, about: 780, services: 780, journal: 760, contact: 760, cv: 780 };

const BOOT_KEY = "arkade:booted";
/** Stacking-order id for the Music window (it has no URL of its own). */
const MUSIC_ID = "music";
const MUSIC_Z = 52;
const MUTED_KEY = "arkade:music-muted";

const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

function readMuted() {
  try {
    return localStorage.getItem(MUTED_KEY) === "1";
  } catch {
    return false;
  }
}
function writeMuted(muted: boolean) {
  try {
    if (muted) localStorage.setItem(MUTED_KEY, "1");
    else localStorage.removeItem(MUTED_KEY);
  } catch {}
}

type Meta = { title: string; crumbs: Crumb[]; footL: string; footR: string; width: number; parent: string };

function metaFor(w: WinSpec): Meta {
  const home: Crumb = { label: "Desktop", href: "/" };
  if (w.kind === "page") {
    return {
      title: TITLES[w.id],
      crumbs: [home, { label: CRUMBS[w.id] }],
      footL: TITLES[w.id],
      footR: FOOTS[w.id],
      width: WIDTHS[w.id],
      parent: "/",
    };
  }
  if (w.kind === "project") {
    const p = getProject(w.slug)!;
    return {
      title: p.name,
      crumbs: [home, { label: "Work", href: "/work" }, { label: p.name }],
      footL: p.type,
      footR: hostOf(p.live),
      width: 700,
      parent: "/work",
    };
  }
  const p = getPost(w.slug)!;
  return {
    title: p.title,
    crumbs: [home, { label: "Journal", href: "/journal" }, { label: p.title }],
    footL: p.tag,
    footR: formatDate(p.date),
    width: 700,
    parent: "/journal",
  };
}

function content(w: WinSpec, child?: WinSpec) {
  if (w.kind === "project") return <ProjectPage slug={w.slug} />;
  if (w.kind === "post") return <PostPage slug={w.slug} />;
  const sub = child && child.kind !== "page" ? child.slug : undefined;
  switch (w.id) {
    case "work":
      return <WorkPage current={sub} />;
    case "about":
      return <AboutPage />;
    case "services":
      return <ServicesPage />;
    case "journal":
      return <JournalPage current={sub} />;
    case "contact":
      return <ContactPage />;
    case "cv":
      return <CvPage />;
  }
}

type Power = "off" | "booting" | "on";

export default function OS() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const route = useMemo(() => parseRoute(pathname), [pathname]);
  const ids = route.windows.map((w) => w.href);

  // Stacking order (hrefs, top last). Reset whenever the URL changes so the
  // newly opened window lands on top.
  const [order, setOrder] = useState<string[]>(ids);
  const idsKey = ids.join("|");
  useEffect(
    () =>
      setOrder((o) => {
        const base = idsKey ? idsKey.split("|") : [];
        // The Music window survives navigation; it sits under the new window.
        return o.includes(MUSIC_ID) ? [MUSIC_ID, ...base] : base;
      }),
    [idsKey],
  );
  const focus = useCallback((href: string) => setOrder((o) => (o[o.length - 1] === href ? o : [...o.filter((x) => x !== href), href])), []);
  const zOf = (href: string) => 10 + Math.max(0, order.indexOf(href));
  const topHref = order[order.length - 1];

  const close = useCallback(
    (w: WinSpec) => {
      router.push(metaFor(w).parent);
    },
    [router],
  );

  // Power / boot screen.
  const [power, setPower] = useState<Power>(BOOT_SCREEN ? "off" : "on");
  useEffect(() => {
    if (!BOOT_SCREEN) return;
    try {
      if (localStorage.getItem(BOOT_KEY)) setPower("on");
    } catch {}
  }, []);

  // Music. The Spotify embed is created on page load inside the Music window,
  // which starts minimised (a small visible panel, never display:none).
  const playerHost = useRef<HTMLDivElement>(null);
  const [soundNote, setSoundNote] = useState(false);
  const noteTimer = useRef<number>();
  const showSoundNote = useCallback(() => {
    setSoundNote(true);
    window.clearTimeout(noteTimer.current);
    noteTimer.current = window.setTimeout(() => setSoundNote(false), 3000);
  }, []);
  const music = useSpotifyMusic(MUSIC.trackId, playerHost, showSoundNote);
  const [musicView, setMusicView] = useState<"min" | "open">("min");
  const resumeOnOpen = useRef(false);
  const [muted, setMuted] = useState(false);
  useEffect(() => setMuted(readMuted()), []);

  const openMusic = useCallback(() => {
    setMusicView("open");
    focus(MUSIC_ID);
    if (resumeOnOpen.current) {
      resumeOnOpen.current = false;
      music.play();
    }
  }, [focus, music]);
  const minimiseMusic = useCallback(() => {
    setMusicView("min");
    setOrder((o) => o.filter((x) => x !== MUSIC_ID));
  }, []);
  /** Close = pause and collapse to the panel; reopening resumes. */
  const closeMusic = useCallback(() => {
    resumeOnOpen.current = music.isPlaying();
    music.pause();
    minimiseMusic();
  }, [music, minimiseMusic]);

  /** Speaker: play/pause, and remember a mute. */
  const toggleSound = () => {
    if (music.playing) {
      music.pause();
      writeMuted(true);
      setMuted(true);
    } else {
      music.play();
      writeMuted(false);
      setMuted(false);
    }
  };

  /** Dismissing the boot screen is the user gesture that starts the music. */
  const startMusicFromGesture = () => {
    if (readMuted()) return;
    music.start(); // synchronous, inside the gesture
    if (isIOS()) openMusic(); // iOS may still need a tap on the player itself
    // One check, no retries. Buffering counts as started: the video can take
    // a few seconds to begin even when autoplay was allowed.
    window.setTimeout(() => {
      if (!music.isStarting()) openMusic(); // let the visitor press play
    }, 2000);
  };

  const bootUp = () => {
    startMusicFromGesture();
    setPower("booting");
    document.documentElement.dataset.booted = "1";
    try {
      localStorage.setItem(BOOT_KEY, "1");
    } catch {}
    window.setTimeout(() => setPower("on"), 900);
  };
  const bootRef = useRef(bootUp);
  bootRef.current = bootUp;

  const powerButton = () => {
    if (power === "off") return bootUp();
    if (power === "on") {
      music.pause();
      minimiseMusic();
      delete document.documentElement.dataset.booted;
      setPower("off");
    }
  };

  // Keyboard: any key boots; Escape closes the top window.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (power === "off") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        bootRef.current();
        return;
      }
      if (e.key !== "Escape") return;
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select")) return;
      if (topHref === MUSIC_ID) return closeMusic();
      const top = route.windows.find((w) => w.href === topHref);
      if (top) close(top);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [power, route.windows, topHref, close, closeMusic]);

  // Clock (client only, to keep the server render stable).
  const [clock, setClock] = useState("--:--");
  useEffect(() => {
    const tick = () => setClock(new Date().toTimeString().slice(0, 5));
    tick();
    const t = window.setInterval(tick, 10_000);
    return () => window.clearInterval(t);
  }, []);

  const t = PHOSPHORS[PHOSPHOR];
  const vars = {
    "--c": t.c,
    "--c2": t.c2,
    "--c3": t.c3,
    "--c4": t.c4,
    "--g": t.glow,
    "--sh": t.shadow,
  } as React.CSSProperties;

  const musicTitle = `${MUSIC.artist} — ${MUSIC.title}`;

  return (
    <div className="scene">
      {BOOT_SCREEN && (
        <script
          // Hide the boot screen before first paint for returning visitors.
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("${BOOT_KEY}"))document.documentElement.dataset.booted="1"}catch(e){}`,
          }}
        />
      )}
      <div className="scene__blinds" aria-hidden="true" />
      <div className="scene__shelf" aria-hidden="true" />

      <div className="monitor">
        <div className="monitor__bezel">
          <div className={`screen${power === "booting" ? " screen--booting" : ""}`} style={vars}>
            <div className="screen__content">
              {/* Desktop */}
              <nav className="icons" aria-label="Desktop">
                {PAGES.map((p) => {
                  const Icon = PAGE_ICONS[p.key];
                  return (
                    <Link key={p.key} href={p.href} className="ic">
                      <Icon />
                      <span>{p.label}</span>
                    </Link>
                  );
                })}
                <button type="button" className="ic" onClick={openMusic}>
                  <MusicIcon />
                  <span>Music</span>
                </button>
              </nav>

              <div className="hero">
                <p className="hero__bio">{desktop.bio}</p>
                <div className="px hero__name" aria-hidden="true">
                  arkade
                </div>
              </div>
              <h1 className="sr-only">arkade, backend engineer</h1>
              <div className="hint">
                {desktop.hint}
                <span className="cur" aria-hidden="true" />
              </div>

              {/* Windows */}
              {route.windows.map((w, i) => {
                const m = metaFor(w);
                return (
                  <Window
                    key={w.kind === "page" ? w.href : w.kind}
                    title={m.title}
                    crumbs={m.crumbs}
                    footerLeft={m.footL}
                    footerRight={m.footR}
                    width={m.width}
                    level={i}
                    z={zOf(w.href)}
                    active={w.href === topHref}
                    onFocus={() => focus(w.href)}
                    onClose={() => close(w)}
                  >
                    {content(w, route.windows[i + 1])}
                  </Window>
                );
              })}

              {/* Always mounted so the player persists; minimising is CSS only. */}
              <Window
                key={MUSIC_ID}
                title="Music"
                crumbs={[{ label: "Desktop", href: "/" }, { label: "Music" }]}
                footerLeft={musicTitle}
                footerRight=""
                width={380}
                level={0}
                placement="bottom-right"
                className="win--music"
                minimised={musicView === "min"}
                onMinimise={minimiseMusic}
                // Above the scanline/glass layers (z 50–51) so the player is
                // never overlaid.
                z={MUSIC_Z}
                active={topHref === MUSIC_ID}
                onFocus={() => focus(MUSIC_ID)}
                onClose={closeMusic}
              >
                <div className="music">
                  <div className="music__player" ref={playerHost} />
                  <p className="music__note">Plays via Spotify. Log in for the full track.</p>
                </div>
              </Window>

              {route.notFound && (
                <div role="alertdialog" aria-label="Error" className="err">
                  <div className="err__bar">Error</div>
                  <div className="err__body">
                    <WarningIcon />
                    <div>
                      <div className="px h-s">This page isn&apos;t here</div>
                      <p className="body small">The address may have changed, or the file was moved. Try the desktop or the Work folder.</p>
                      <div className="err__btns">
                        <Link href="/" className="btn">
                          Go to desktop
                        </Link>
                        <Link href="/work" className="ghost">
                          Open Work
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Taskbar */}
              <footer className="taskbar">
                <div className="taskbar__tiles">
                  {PAGES.map((p) => {
                    const Icon = PAGE_ICONS[p.key];
                    return (
                      <Link key={p.key} href={p.href} className="tile" aria-label={p.label} title={p.label}>
                        <Icon size={16} detail={false} />
                      </Link>
                    );
                  })}
                  <button type="button" className="tile" aria-label="Music" title="Music" onClick={openMusic}>
                    <MusicIcon size={16} detail={false} />
                  </button>
                </div>
                <div className="taskbar__div" aria-hidden="true" />
                <div className="taskbar__tabs">
                  {route.windows.length === 0 && musicView !== "open" ? (
                    <div className="taskbar__now">
                      {desktop.now} <span className="c2">•</span> Telegram{" "}
                      <a href={TELEGRAM.url} target="_blank" rel="noopener noreferrer">
                        {TELEGRAM.handle}
                      </a>
                    </div>
                  ) : (
                    <>
                      {route.windows.map((w) => (
                        <button
                          key={w.href}
                          type="button"
                          className={`tab${w.href === topHref ? " tab--on" : ""}`}
                          onClick={() => focus(w.href)}
                        >
                          {metaFor(w).title}
                        </button>
                      ))}
                      {musicView === "open" && (
                        <button type="button" className={`tab${topHref === MUSIC_ID ? " tab--on" : ""}`} onClick={() => focus(MUSIC_ID)}>
                          Music
                        </button>
                      )}
                    </>
                  )}
                </div>
                <div className="taskbar__right">
                  {soundNote && music.playing && <span className="sound-note">Sound on. The speaker turns it off.</span>}
                  <button
                    type="button"
                    className="tile"
                    aria-label={music.playing ? "Pause music" : "Play music"}
                    aria-pressed={music.playing}
                    title={music.playing ? "Pause music" : "Play music"}
                    onClick={toggleSound}
                  >
                    <SpeakerIcon on={music.playing} />
                  </button>
                  <time className="clock" suppressHydrationWarning>
                    {clock}
                  </time>
                </div>
              </footer>
            </div>

            {BOOT_SCREEN && power === "off" && (
              <button type="button" className="boot" onClick={bootUp}>
                <span className="px boot__name">arkade</span>
                <span className="boot__hint">
                  Press any key or the power button
                  <span className="cur" aria-hidden="true" />
                </span>
                <span className="boot__sound">{muted ? "♪ sound off" : "♪ sound on"}</span>
              </button>
            )}

            <div className="scan" aria-hidden="true" />
            <div className="glass" aria-hidden="true" />
          </div>
        </div>
        <div className="monitor__chin">
          <span className="monitor__brand px">arkade</span>
          <span className={`led${power === "off" ? "" : " led--on"}`} aria-hidden="true" />
          <button type="button" className="power" aria-label={power === "off" ? "Power on" : "Power off"} onClick={powerButton} />
        </div>
      </div>
    </div>
  );
}
