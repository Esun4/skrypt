// Shared visual primitives. No styles object on window — local consts only.

const TONES = {
  teal:        { bg: "#ECFDF5", fg: "#047857", border: "#A7F3D0" },
  "teal-solid":{ bg: "#10B981", fg: "#FFFFFF", border: "#10B981" },
  amber:       { bg: "#FFF7ED", fg: "#B45309", border: "#FED7AA" },
  clay:        { bg: "#FFFBEB", fg: "#92400E", border: "#FDE68A" },
  red:         { bg: "#FEF2F2", fg: "#B91C1C", border: "#FECACA" },
  blue:        { bg: "#EFF6FF", fg: "#1D4ED8", border: "#BFDBFE" },
  slate:       { bg: "#F1F5F9", fg: "#475569", border: "#CBD5E1" },
};

const Pill = ({ tone = "slate", children, dot = false, style: extra = {}, size = "md" }) => {
  const t = TONES[tone] || TONES.slate;
  const pad = size === "sm" ? "2px 8px" : "3px 10px";
  const fs = size === "sm" ? 11 : 12;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: pad, borderRadius: 999, fontSize: fs, fontWeight: 500,
      lineHeight: 1, background: t.bg, color: t.fg,
      border: `1px solid ${t.border}`, whiteSpace: "nowrap", ...extra
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: t.fg, opacity: 0.85 }} />}
      {children}
    </span>
  );
};

const Eyebrow = ({ children, style: extra = {} }) => (
  <div style={{
    fontSize: 11, fontWeight: 500, color: "#6B7280",
    letterSpacing: "0.08em", textTransform: "uppercase", ...extra
  }}>{children}</div>
);

const Avatar = ({ initials, kind = "patient", size = 32 }) => {
  // patient = teal on mint, ai = slate monogram, staff = clay on butter
  const palettes = {
    patient: { bg: "#D1FAE5", fg: "#047857" },
    ai:      { bg: "#0F172A", fg: "#E2E8F0" },
    staff:   { bg: "#FEF3C7", fg: "#92400E" },
  };
  const p = palettes[kind] || palettes.patient;
  return (
    <div style={{
      width: size, height: size, borderRadius: 999, background: p.bg, color: p.fg,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontSize: size <= 24 ? 10 : 12, fontWeight: 600, letterSpacing: "0.02em",
      flex: "0 0 auto",
      ...(kind === "ai" ? { boxShadow: "inset 0 0 0 1px #1E293B" } : {})
    }}>
      {kind === "ai" ? "S" : initials}
    </div>
  );
};

const Card = ({ children, style: extra = {}, ...rest }) => (
  <div style={{
    background: "#FFFFFF", border: "1px solid #E8EAEE", borderRadius: 14, ...extra
  }} {...rest}>{children}</div>
);

const Btn = ({ kind = "secondary", icon, children, style: extra = {}, ...rest }) => {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "8px 14px", borderRadius: 10, fontSize: 13, fontWeight: 500,
    border: "1px solid transparent", lineHeight: 1, transition: "all .12s ease",
    cursor: "pointer", whiteSpace: "nowrap",
  };
  const styles = {
    primary:   { background: "#10B981", color: "#fff", borderColor: "#10B981" },
    secondary: { background: "#fff", color: "#0B0F14", borderColor: "#D8DBE0" },
    ghost:     { background: "transparent", color: "#4B5563", borderColor: "transparent" },
    warn:      { background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" },
    danger:    { background: "#fff", color: "#B91C1C", borderColor: "#FECACA" },
  };
  return (
    <button {...rest} style={{ ...base, ...styles[kind], ...extra }}>
      {icon && <span style={{ display: "inline-flex" }}>{icon}</span>}
      {children}
    </button>
  );
};

const StageBadge = ({ stage }) => {
  const s = STAGE[stage];
  if (!s) return null;
  const dotted = stage === "ai_working" || stage === "awaiting_patient";
  return <Pill tone={s.tone} dot={dotted}>{s.label}</Pill>;
};

window.Pill = Pill;
window.Eyebrow = Eyebrow;
window.Avatar = Avatar;
window.Card = Card;
window.Btn = Btn;
window.StageBadge = StageBadge;
