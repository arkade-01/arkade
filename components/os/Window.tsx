"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { CloseIcon, MaxIcon, MinIcon } from "./icons";

export type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  crumbs: Crumb[];
  footerLeft: string;
  footerRight: string;
  /** Width in px when not maximised. */
  width: number;
  /** 0 for a page window, 1 for a window cascaded over it. */
  level: number;
  /** Default spot before the first drag. */
  placement?: "cascade" | "bottom-right";
  className?: string;
  /** Shows a minimise button (used by the Music window). */
  onMinimise?: () => void;
  /** Collapsed to its minimised panel (styled by the caller's className). */
  minimised?: boolean;
  z: number;
  active: boolean;
  onFocus: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

const MOBILE = "(max-width: 720px)";
const TASKBAR = 58;
/** Space kept clear above the taskbar for the docked music player, which
    stands 30px taller than the taskbar (see .is-docked in os.css). */
const DOCK = 36;

export default function Window({
  title,
  crumbs,
  footerLeft,
  footerRight,
  width,
  level,
  placement = "cascade",
  className,
  onMinimise,
  minimised = false,
  z,
  active,
  onFocus,
  onClose,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [max, setMax] = useState(false);

  const canDrag = () => !max && !window.matchMedia(MOBILE).matches;

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.button !== 0 || (e.target as HTMLElement).closest("button") || !canDrag()) return;
    const el = ref.current;
    const parent = el?.offsetParent as HTMLElement | null;
    if (!el || !parent) return;
    e.preventDefault();
    const bar = e.currentTarget;
    bar.setPointerCapture(e.pointerId);
    const sx = e.clientX;
    const sy = e.clientY;
    const ox = el.offsetLeft;
    const oy = el.offsetTop;
    const maxX = parent.clientWidth - 80;
    // Keep the title bar (and its buttons) above the docked player.
    const maxY = parent.clientHeight - TASKBAR - DOCK - 40;
    const minX = 80 - el.offsetWidth;

    const move = (ev: PointerEvent) => {
      setPos({
        x: Math.min(maxX, Math.max(minX, ox + ev.clientX - sx)),
        y: Math.min(maxY, Math.max(0, oy + ev.clientY - sy)),
      });
    };
    const up = () => {
      bar.removeEventListener("pointermove", move);
      bar.removeEventListener("pointerup", up);
      bar.removeEventListener("pointercancel", up);
    };
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
    bar.addEventListener("pointercancel", up);
  }

  const toggleMax = () => setMax((m) => !m);

  // Before the first drag, position with CSS so the server render matches.
  const bottomRight = !pos && placement === "bottom-right";
  const left = pos ? `${pos.x}px` : `max(12px, calc(50% - ${width / 2}px - 60px + ${level * 120}px))`;
  const top = pos ? pos.y : 22 + level * 38;
  const place: React.CSSProperties = bottomRight
    ? { right: "24px", bottom: `${TASKBAR + 16}px`, maxHeight: `calc(100% - ${TASKBAR + 32}px)` }
    : { left, top: `${top}px`, maxHeight: `min(640px, calc(100% - ${top + TASKBAR + DOCK}px))` };

  return (
    <section
      ref={ref}
      role="dialog"
      aria-label={title}
      className={`win${max ? " win--max" : ""}${active ? " win--active" : ""}${minimised ? " win--min" : ""}${className ? ` ${className}` : ""}`}
      style={
        {
          zIndex: z,
          width: `${width}px`,
          ...place,
        } as React.CSSProperties
      }
      onPointerDownCapture={onFocus}
    >
      <div
        className={`win__bar${canDragCursor(max)}`}
        onPointerDown={onPointerDown}
        onDoubleClick={(e) => {
          if (!(e.target as HTMLElement).closest("button")) toggleMax();
        }}
      >
        <h2 className="win__title">{title}</h2>
        <div className="win__btns">
          {onMinimise && (
            <button type="button" className="wbtn" aria-label={`Minimise ${title}`} onClick={onMinimise}>
              <MinIcon />
            </button>
          )}
          <button type="button" className="wbtn" aria-label={max ? "Restore window" : "Maximise window"} onClick={toggleMax}>
            <MaxIcon />
          </button>
          <button type="button" className="wbtn" aria-label={`Close ${title}`} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <nav className="win__crumbs" aria-label="Breadcrumb">
        {crumbs.map((c, i) => (
          <span key={i}>
            {i > 0 && <span className="dim"> / </span>}
            {c.href ? (
              <Link href={c.href} className="crumb">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </span>
        ))}
      </nav>
      <div className="win__body">{children}</div>
      <div className="win__foot">
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </div>
    </section>
  );
}

const canDragCursor = (max: boolean) => (max ? "" : " win__bar--drag");
