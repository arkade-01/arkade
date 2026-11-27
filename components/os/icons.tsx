// Pixel-art icons. Filled with the phosphor colour (currentColor),
// with darker details drawn in the screen's glass colour.
import type { PageKey } from "./routes";

const DARK = "#0d1113";

type Props = { size?: number; detail?: boolean };

function Pixel({
  w,
  h,
  vb,
  body,
  detail,
  detailOpacity = 0.5,
  extra,
  size,
}: {
  w: number;
  h: number;
  vb: string;
  body: string;
  detail?: string;
  detailOpacity?: number;
  extra?: string;
  size: number;
}) {
  const scale = size / Math.max(w, h);
  return (
    <svg
      width={Math.round(w * scale)}
      height={Math.round(h * scale)}
      viewBox={vb}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d={body} fill="currentColor" />
      {detail && <path d={detail} fill={DARK} opacity={detailOpacity} />}
      {extra && <path d={extra} fill="currentColor" />}
    </svg>
  );
}

export function FolderIcon({ size = 60, detail = true }: Props) {
  return (
    <Pixel w={24} h={20} vb="0 0 24 20" size={size} body="M1 3h8v2h14v14H1z" detail={detail ? "M1 7h22v1H1z" : undefined} detailOpacity={0.45} />
  );
}

export function DocIcon({ size = 56, detail = true }: Props) {
  return (
    <Pixel
      w={18}
      h={20}
      vb="0 0 18 20"
      size={size}
      body="M1 0h11l5 5v15H1z"
      detail={detail ? "M4 7h10v1H4zM4 10h10v1H4zM4 13h10v1H4zM4 16h6v1H4z" : undefined}
      detailOpacity={0.55}
    />
  );
}

export function BriefcaseIcon({ size = 60, detail = true }: Props) {
  return (
    <Pixel
      w={24}
      h={20}
      vb="0 0 24 20"
      size={size}
      body="M8 1h8v4h7v14H1V5h7zM10 3v2h4V3z"
      detail={detail ? "M1 10h22v1H1zM11 9h2v4h-2z" : undefined}
    />
  );
}

export function NotebookIcon({ size = 56, detail = true }: Props) {
  return (
    <Pixel
      w={18}
      h={20}
      vb="0 0 18 20"
      size={size}
      body="M1 0h16v20H1z"
      detail={detail ? "M3 0h1v20H3zM6 4h8v1H6zM6 7h8v1H6zM6 10h6v1H6z" : undefined}
      detailOpacity={0.55}
    />
  );
}

export function EnvelopeIcon({ size = 62, detail = true }: Props) {
  return (
    <Pixel
      w={24}
      h={17}
      vb="0 0 24 17"
      size={size}
      body="M0 0h24v17H0z"
      detail={
        detail
          ? "M1 1h2v1h2v1h2v1h2v1h2v1h2v-1h2v-1h2v-1h2v-1h2v-1h2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2z"
          : undefined
      }
      detailOpacity={0.55}
    />
  );
}

export function CvIcon({ size = 54, detail = true }: Props) {
  return (
    <Pixel
      w={20}
      h={20}
      vb="0 0 20 20"
      size={size}
      body="M0 0h17l3 3v17H0z"
      detail={detail ? "M5 0h9v6H5zM3 11h14v9H3z" : undefined}
      extra={detail ? "M11 1h2v4h-2z" : undefined}
    />
  );
}

export function MusicIcon({ size = 60, detail = true }: Props) {
  // Cassette tape.
  return (
    <Pixel
      w={24}
      h={16}
      vb="0 0 24 16"
      size={size}
      body="M1 1h22v14H1z"
      detail={detail ? "M3 3h18v1H3zM6 5h12v5H6zM6 12h12v3H6z" : undefined}
      detailOpacity={0.55}
      extra={detail ? "M8 7h2v2H8zM14 7h2v2h-2z" : undefined}
    />
  );
}

export function WarningIcon({ size = 40 }: Props) {
  return (
    <Pixel w={20} h={18} vb="0 0 20 18" size={size} body="M10 0L20 18H0z" detail="M9 6h2v6H9zM9 13h2v2H9z" detailOpacity={1} />
  );
}

export const PAGE_ICONS: Record<PageKey, (p: Props) => JSX.Element> = {
  work: FolderIcon,
  about: DocIcon,
  services: BriefcaseIcon,
  journal: NotebookIcon,
  contact: EnvelopeIcon,
  cv: CvIcon,
};

export function SpeakerIcon({ on }: { on: boolean }) {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" aria-hidden="true" shapeRendering="crispEdges">
      <path d="M1 5h3l4-4v12L4 9H1z" fill="currentColor" />
      {on ? (
        <path d="M11 4c1.5 1.5 1.5 4.5 0 6M13 2c2.5 2.5 2.5 7.5 0 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      ) : (
        <path d="M11 4l4 6M15 4l-4 6" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}

export function MaxIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" shapeRendering="crispEdges">
      <rect x="1" y="1" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function MinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" shapeRendering="crispEdges">
      <rect x="1" y="9" width="10" height="2" fill="currentColor" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
