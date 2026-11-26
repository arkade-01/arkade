// Tiny synthesised UI sounds (no audio files). Off unless the visitor turns them on.

let ctx: AudioContext | null = null;

function audio() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function beep(freq: number, start: number, dur: number, gain = 0.035, type: OscillatorType = "square") {
  const a = audio();
  if (!a) return;
  const t = a.currentTime + start;
  const osc = a.createOscillator();
  const g = a.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(a.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

export const sfx = {
  click() {
    beep(1400, 0, 0.025, 0.025);
  },
  boot() {
    beep(110, 0, 0.5, 0.05, "sawtooth");
    beep(440, 0.25, 0.08);
    beep(660, 0.35, 0.08);
    beep(880, 0.45, 0.12);
  },
};
