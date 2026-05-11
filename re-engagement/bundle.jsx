
// ===== icons.jsx =====
// Lightweight inline icon set (1.75 stroke, lucide-style) — no icon library needed.
const Icon = ({ d, size = 16, stroke = "currentColor", fill = "none", strokeWidth = 1.75, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
       strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d}
  </svg>
);

const I = {
  home: <Icon d={<><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></>} />,
  inbox: <Icon d={<><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></>} />,
  patients: <Icon d={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />,
  reengage: <Icon d={<><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M9 12l2 2 4-4"/></>} />,
  clinical: <Icon d={<><path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8"/><path d="M5 14h14l1 6H4z"/><path d="M12 8v4M10 10h4"/></>} />,
  analytics: <Icon d={<><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></>} />,
  settings: <Icon d={<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>} />,
  lock: <Icon d={<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>} />,
  search: <Icon d={<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>} />,
  chevronRight: <Icon d={<polyline points="9 18 15 12 9 6"/>} />,
  chevronDown: <Icon d={<polyline points="6 9 12 15 18 9"/>} />,
  arrowLeft: <Icon d={<><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></>} />,
  plus: <Icon d={<><path d="M12 5v14M5 12h14"/></>} />,
  send: <Icon d={<><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></>} />,
  pause: <Icon d={<><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></>} />,
  user: <Icon d={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />,
  check: <Icon d={<polyline points="20 6 9 17 4 12"/>} />,
  x: <Icon d={<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>} />,
  alert: <Icon d={<><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></>} />,
  calendar: <Icon d={<><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>} />,
  phone: <Icon d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>} />,
  bolt: <Icon d={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>} />,
  sparkle: <Icon d={<><path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3z"/><path d="M19 14l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/></>} />,
  edit: <Icon d={<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>} />,
  filter: <Icon d={<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>} />,
  more: <Icon d={<><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></>} />,
  command: <Icon d={<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>} />,
};

window.I = I;


// ===== data.jsx =====
// Stubbed re-engagement queue. All values are illustrative for the prototype.

const STAGE = {
  not_started:      { label: "Not started",     tone: "slate" },
  staff_sent:       { label: "Staff sent",      tone: "clay"  },
  ai_working:       { label: "AI working",      tone: "teal"  },
  awaiting_patient: { label: "Awaiting reply",  tone: "amber" },
  needs_you:        { label: "Needs you",       tone: "red"   },
  booked:           { label: "Booked",          tone: "teal-solid" },
  closed:           { label: "Closed",          tone: "slate" },
};

// reasons for a "needs you" handoff — only 3, kept narrow on purpose
const HANDOFF = {
  off_script:    { label: "Off-script question", tone: "amber" },
  no_slot:       { label: "No matching slot",    tone: "amber" },
  asked_human:   { label: "Asked for human",     tone: "amber" },
};

const PATIENTS = [
  {
    id: "p-rachel",
    name: "Rachel Moore",
    initials: "RM",
    phoneMask: "(•••) •••-2118",
    overdue: "11 mo",
    overdueDays: 334,
    lastVisit: "Jun 12, 2025",
    reason: "Hygiene recall",
    stage: "ai_working",
    nextStep: "Confirming time",
    activity: "Skrypt AI proposed 2 slots · 14m ago",
    value: 850,
    pinned: true,
  },
  {
    id: "p-tobias",
    name: "Tobias Grant",
    initials: "TG",
    phoneMask: "(•••) •••-0461",
    overdue: "7 mo",
    overdueDays: 213,
    lastVisit: "Oct 3, 2025",
    reason: "Treatment plan: 2 fillings",
    stage: "needs_you",
    handoff: "off_script",
    nextStep: "Reply about insurance",
    activity: "Patient asked an insurance Q · 41m ago",
    value: 1200,
    pinned: true,
  },
  {
    id: "p-eve",
    name: "Eve Walsh",
    initials: "EW",
    phoneMask: "(•••) •••-7732",
    overdue: "14 mo",
    overdueDays: 426,
    lastVisit: "Mar 1, 2025",
    reason: "Hygiene recall",
    stage: "not_started",
    nextStep: "Start outreach",
    activity: "—",
    value: 400,
  },
  {
    id: "p-marcus",
    name: "Marcus Liu",
    initials: "ML",
    phoneMask: "(•••) •••-3308",
    overdue: "9 mo",
    overdueDays: 274,
    lastVisit: "Aug 5, 2025",
    reason: "Crown follow-up",
    stage: "awaiting_patient",
    nextStep: "Awaiting reply",
    activity: "Skrypt AI sent a nudge · 2h ago",
    value: 2200,
  },
  {
    id: "p-priya",
    name: "Priya Shah",
    initials: "PS",
    phoneMask: "(•••) •••-9912",
    overdue: "6 mo",
    overdueDays: 184,
    lastVisit: "Nov 11, 2025",
    reason: "Hygiene recall",
    stage: "booked",
    nextStep: "Booked Tue Nov 18 · 2:30pm",
    activity: "Skrypt AI booked the slot · yesterday",
    value: 280,
  },
  {
    id: "p-james",
    name: "James Okafor",
    initials: "JO",
    phoneMask: "(•••) •••-1042",
    overdue: "8 mo",
    overdueDays: 244,
    lastVisit: "Sep 8, 2025",
    reason: "Hygiene recall",
    stage: "staff_sent",
    nextStep: "Awaiting first reply",
    activity: "Maria sent the opener · 22m ago",
    value: 280,
  },
  {
    id: "p-anya",
    name: "Anya Petrov",
    initials: "AP",
    phoneMask: "(•••) •••-5519",
    overdue: "12 mo",
    overdueDays: 366,
    lastVisit: "May 14, 2025",
    reason: "Treatment plan: implant consult",
    stage: "needs_you",
    handoff: "no_slot",
    nextStep: "Override the schedule",
    activity: "No slot fit patient's window · 3h ago",
    value: 3400,
  },
  {
    id: "p-derek",
    name: "Derek Yamamoto",
    initials: "DY",
    phoneMask: "(•••) •••-6671",
    overdue: "10 mo",
    overdueDays: 305,
    lastVisit: "Jul 2, 2025",
    reason: "Hygiene recall",
    stage: "ai_working",
    nextStep: "Asking availability",
    activity: "Patient replied · 6m ago",
    value: 280,
  },
  {
    id: "p-lena",
    name: "Lena Brooks",
    initials: "LB",
    phoneMask: "(•••) •••-2287",
    overdue: "13 mo",
    overdueDays: 396,
    lastVisit: "Apr 5, 2025",
    reason: "Hygiene recall",
    stage: "closed",
    nextStep: "No reply after 2 nudges",
    activity: "Auto-closed · 2 days ago",
    value: 280,
  },
  {
    id: "p-sam",
    name: "Sam Aldridge",
    initials: "SA",
    phoneMask: "(•••) •••-4451",
    overdue: "6 mo",
    overdueDays: 188,
    lastVisit: "Nov 3, 2025",
    reason: "Hygiene recall",
    stage: "not_started",
    nextStep: "Start outreach",
    activity: "—",
    value: 280,
  },
  {
    id: "p-chloe",
    name: "Chloe Reinhardt",
    initials: "CR",
    phoneMask: "(•••) •••-8809",
    overdue: "9 mo",
    overdueDays: 268,
    lastVisit: "Aug 18, 2025",
    reason: "Treatment plan: 1 filling",
    stage: "booked",
    nextStep: "Booked Thu Nov 20 · 9:00am",
    activity: "Skrypt AI booked the slot · 4h ago",
    value: 320,
  },
  {
    id: "p-omar",
    name: "Omar Castellano",
    initials: "OC",
    phoneMask: "(•••) •••-1190",
    overdue: "7 mo",
    overdueDays: 219,
    lastVisit: "Sep 28, 2025",
    reason: "Hygiene recall",
    stage: "needs_you",
    handoff: "asked_human",
    nextStep: "Patient wants to talk to staff",
    activity: "Patient asked for a human · 1h ago",
    value: 280,
  },
];

// Conversation transcripts per patient. Authors: 'staff' | 'patient' | 'ai'.
// Inline 'event' rows describe AI autonomous actions.
const THREADS = {
  "p-rachel": {
    plan: {
      goal: "Book a hygiene cleaning",
      status: "Active — confirming time",
      next: "Will follow up tomorrow 10:00 AM if no reply",
      escalate: "If patient asks a clinical, billing or off-script question",
    },
    messages: [
      { kind: "msg", who: "staff", author: "Maria Chen", time: "Yesterday 4:12 PM",
        text: "Hi Rachel — Maria from Clearstone Dental. Noticed it's been a while since your last cleaning, hope you're doing well! Want me to find you a time?" },
      { kind: "msg", who: "patient", author: "Rachel Moore", time: "Yesterday 5:48 PM",
        text: "Oh hey! Yeah I keep meaning to schedule, been busy. What've you got?" },
      { kind: "event", text: "Skrypt AI took over the conversation" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Yesterday 5:49 PM",
        text: "Totally understand! I'm Skrypt AI, Clearstone's automated scheduling assistant — happy to find a time. Are mornings or afternoons usually easier for you?" },
      { kind: "msg", who: "patient", author: "Rachel Moore", time: "Yesterday 7:02 PM",
        text: "afternoons mostly, after 2 if possible" },
      { kind: "event", text: "Skrypt AI checked Dr. Chen's hygiene schedule for the next 10 business days" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Yesterday 7:02 PM",
        text: "Got it. We have Tue Nov 18 at 2:30pm or Thu Nov 20 at 3:00pm with Dr. Chen — either work?" },
      { kind: "msg", who: "patient", author: "Rachel Moore", time: "Today 9:14 AM",
        text: "tues works 🙏" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Today 9:14 AM",
        text: "Perfect. Holding Tue Nov 18 at 2:30pm for a hygiene cleaning with Dr. Chen — confirming now." },
    ],
    pending: { kind: "msg", who: "ai", author: "Skrypt AI", time: "in ~30s", draft: true,
      text: "You're booked for Tue Nov 18 at 2:30 PM with Dr. Chen. We'll text a reminder 48h before. See you then!" },
  },

  "p-tobias": {
    plan: {
      goal: "Book treatment plan: 2 fillings",
      status: "Paused — handed off to staff",
      next: "Awaiting Maria's reply",
      escalate: "Patient asked about insurance coverage",
    },
    messages: [
      { kind: "msg", who: "staff", author: "Maria Chen", time: "Today 10:14 AM",
        text: "Hi Tobias — Maria from Clearstone. You had two fillings on your plan from October, want to get them on the books?" },
      { kind: "msg", who: "patient", author: "Tobias Grant", time: "Today 10:31 AM",
        text: "yeah probably should. quick q — does my insurance still cover those? I switched jobs in March and have a new plan now" },
      { kind: "event", text: "Skrypt AI detected an insurance question — outside scope" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Today 10:31 AM",
        text: "Great question! I can't verify insurance benefits myself — Maria from our team will hop in to check that for you. One sec." },
      { kind: "event", text: "Handed off to Maria · reason: off-script question" },
    ],
  },

  "p-marcus": {
    plan: {
      goal: "Book crown follow-up",
      status: "Active — awaiting reply",
      next: "Will close as no-response on Wed May 13 if no reply",
      escalate: "If patient asks a clinical, billing or off-script question",
    },
    messages: [
      { kind: "msg", who: "staff", author: "Maria Chen", time: "Tue 3:40 PM",
        text: "Hi Marcus — Maria from Clearstone. Just checking in on the crown — Dr. Chen wanted to see you for a quick follow-up. Want me to set something up?" },
      { kind: "msg", who: "patient", author: "Marcus Liu", time: "Tue 8:11 PM",
        text: "sure, sometime in the next couple weeks" },
      { kind: "event", text: "Skrypt AI took over the conversation" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Tue 8:11 PM",
        text: "Sounds good! What time of day usually works best — mornings, afternoons, or evenings?" },
      { kind: "event", text: "Skrypt AI sent a nudge · 48h with no reply" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Today 12:30 PM",
        text: "Hi Marcus, just bumping this — let me know what time of day works and I'll find a slot." },
    ],
  },

  "p-eve":   { plan: null, messages: [] },
  "p-priya": {
    plan: {
      goal: "Book a hygiene cleaning",
      status: "Resolved — booked",
      next: "Reminder 48h before appointment",
      escalate: "—",
    },
    messages: [
      { kind: "msg", who: "staff", author: "Maria Chen", time: "Yesterday 11:02 AM",
        text: "Hi Priya — Maria from Clearstone. You're due for a cleaning, want me to find a time?" },
      { kind: "msg", who: "patient", author: "Priya Shah", time: "Yesterday 11:40 AM", text: "yes please!" },
      { kind: "event", text: "Skrypt AI took over the conversation" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Yesterday 11:40 AM",
        text: "Great! Mornings or afternoons easier for you?" },
      { kind: "msg", who: "patient", author: "Priya Shah", time: "Yesterday 12:08 PM", text: "afternoon" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Yesterday 12:08 PM",
        text: "How about Tue Nov 18 at 2:30pm with Dr. Chen?" },
      { kind: "msg", who: "patient", author: "Priya Shah", time: "Yesterday 1:22 PM", text: "perfect" },
      { kind: "event", text: "Skrypt AI booked Tue Nov 18, 2:30 PM — Hygiene with Dr. Chen" },
      { kind: "msg", who: "ai", author: "Skrypt AI", time: "Yesterday 1:22 PM",
        text: "You're booked for Tue Nov 18 at 2:30pm with Dr. Chen. Reminder 48h before. See you then!" },
    ],
  },
};

const METRICS = {
  overdue: 247,
  inOutreach: 38,
  bookedThisMonth: { count: 14, value: 11420 },
  needsYou: 3,
  trend: [4,6,3,8,9,5,11,7,9,12,10,14], // bookings/wk last 12 wks
};

window.STAGE = STAGE;
window.HANDOFF = HANDOFF;
window.PATIENTS = PATIENTS;
window.THREADS = THREADS;
window.METRICS = METRICS;


// ===== primitives.jsx =====
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


// ===== sidebar.jsx =====
// Static sidebar mimicking the existing portal. Re-engagement is the active item.

const SIcons = {
  overview: <Icon d={<><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>} />,
  schedule: I.calendar,
  reception: <Icon d={<><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></>} />,
  billing: <Icon d={<><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>} />,
  analytics: <Icon d={<><line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="14"/></>} />,
  logout: <Icon d={<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>} />,
  collapse: <Icon d={<polyline points="15 18 9 12 15 6"/>} />,
};

const NavItem = ({ icon, label, active, count, locked, badgeTone = "slate" }) => (
  <a href="#" onClick={(e) => e.preventDefault()} style={{
    display: "flex", alignItems: "center", gap: 12, padding: "9px 12px",
    borderRadius: 10, color: active ? "#047857" : (locked ? "#9CA3AF" : "#374151"),
    background: active ? "#ECFDF5" : "transparent",
    fontWeight: active ? 600 : 500, fontSize: 14,
    textDecoration: "none", cursor: locked ? "not-allowed" : "pointer",
    position: "relative",
  }}>
    {active && <span style={{
      position: "absolute", left: -14, top: 8, bottom: 8, width: 3,
      background: "#10B981", borderRadius: 3,
    }}/>}
    <span style={{ display: "inline-flex", color: active ? "#10B981" : (locked ? "#9CA3AF" : "#6B7280") }}>{icon}</span>
    <span style={{ flex: 1 }}>{label}</span>
    {count != null && <Pill tone={badgeTone} size="sm">{count}</Pill>}
    {locked && <span style={{ color: "#C0C5CC", display: "inline-flex" }}>{I.lock}</span>}
  </a>
);

const SkryptMark = ({ size = 28 }) => (
  <img src="re-engagement/skrypt-logo.png" alt="Skrypt" width={size} height={size}
       style={{ display: "block", objectFit: "contain" }} />
);

const Divider = () => (
  <div style={{ height: 1, background: "#EEF0F3", margin: "10px 4px" }} />
);

const Sidebar = () => (
  <aside style={{
    width: 248, flex: "0 0 248px", background: "#FFFFFF",
    borderRight: "1px solid #E8EAEE", padding: "18px 14px 14px 18px",
    display: "flex", flexDirection: "column",
    position: "sticky", top: 0, height: "100vh",
  }}>
    {/* Brand */}
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 4px 18px" }}>
      <SkryptMark size={26} />
      <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>Skrypt AI</span>
    </div>

    {/* Collapse affordance */}
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "0 0 12px" }}>
      <button style={{
        width: 28, height: 28, borderRadius: 8, border: "1px solid #E8EAEE",
        background: "#FBFBFC", color: "#6B7280", cursor: "pointer",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>{SIcons.collapse}</button>
    </div>

    {/* Primary nav */}
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <NavItem icon={SIcons.overview}  label="Overview" />
      <NavItem icon={I.patients}       label="Patients" />
      <NavItem icon={SIcons.schedule}  label="Schedule" locked />
      <NavItem icon={I.reengage}       label="Re-engagement" active count={3} badgeTone="red" />
      <NavItem icon={I.inbox}          label="Inbox" count={88} badgeTone="red" />
    </div>

    <Divider />

    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <NavItem icon={I.clinical}       label="Clinical" locked />
      <NavItem icon={SIcons.reception} label="AI Reception" />
    </div>

    <Divider />

    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <NavItem icon={SIcons.billing}   label="Billing" locked />
      <NavItem icon={SIcons.analytics} label="Analytics" />
      <NavItem icon={I.settings}       label="Settings" />
    </div>

    {/* Bottom — tenant + logged-in staff */}
    <div style={{ marginTop: "auto", paddingTop: 12, display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 10px",
        borderTop: "1px solid #EEF0F3",
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8, background: "#10B981",
          color: "white", fontWeight: 700, fontSize: 12,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
        }}>CD</div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2, flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 13.5, fontWeight: 600 }}>Clearstone Dental</span>
          <span style={{ fontSize: 12, color: "#6B7280" }}>Demo Tenant</span>
        </div>
        <button style={{
          background: "transparent", border: "none", color: "#9CA3AF",
          padding: 4, cursor: "pointer", display: "inline-flex",
        }}>{SIcons.logout}</button>
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "8px 10px",
        background: "#FBFBFC", border: "1px solid #EEF0F3", borderRadius: 10,
      }}>
        <Avatar initials="MC" kind="staff" size={26} />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2, flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 12.5, fontWeight: 500 }}>Maria Chen</span>
          <span style={{ fontSize: 11, color: "#9CA3AF" }}>Front desk · signed in</span>
        </div>
        <Pill tone="teal" size="sm" dot>Live</Pill>
      </div>
    </div>
  </aside>
);

window.Sidebar = Sidebar;


// ===== queue.jsx =====
// Cohort / queue landing view: top metric strip + filter tabs + main table.

const FILTERS = [
  { id: "all",         label: "All" },
  { id: "not_started", label: "Not started" },
  { id: "active",      label: "Active" },     // ai_working + awaiting_patient + staff_sent
  { id: "needs_you",   label: "Needs you" },
  { id: "booked",      label: "Booked" },
  { id: "closed",      label: "Closed" },
];

function matchFilter(p, f) {
  if (f === "all") return true;
  if (f === "active") return ["ai_working", "awaiting_patient", "staff_sent"].includes(p.stage);
  return p.stage === f;
}

const MetricTile = ({ eyebrow, value, sub, accent, children }) => (
  <Card style={{ padding: 18, display: "flex", flexDirection: "column", gap: 6, minHeight: 102 }}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <div style={{
      fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em",
      color: accent || "#0B0F14", lineHeight: 1.05,
    }} className="mono">{value}</div>
    {sub && <div style={{ fontSize: 12.5, color: "#6B7280" }}>{sub}</div>}
    {children}
  </Card>
);

const Sparkline = ({ data, color = "#10B981" }) => {
  const w = 120, h = 26;
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / Math.max(1, (max - min))) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg width={w} height={h} style={{ display: "block" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const FilterTabs = ({ active, onChange, counts }) => (
  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
    {FILTERS.map(f => {
      const isActive = active === f.id;
      return (
        <button key={f.id} onClick={() => onChange(f.id)} style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "6px 12px", borderRadius: 999, fontSize: 13, fontWeight: 500,
          background: isActive ? "#ECFDF5" : "transparent",
          color: isActive ? "#047857" : "#4B5563",
          border: `1px solid ${isActive ? "#A7F3D0" : "#E8EAEE"}`,
        }}>
          {f.label}
          <span className="mono" style={{
            fontSize: 11.5, color: isActive ? "#047857" : "#9CA3AF", fontWeight: 500,
          }}>{counts[f.id]}</span>
        </button>
      );
    })}
  </div>
);

const Row = ({ p, onOpen, selected, onToggle }) => {
  const [hover, setHover] = React.useState(false);
  const isNeeds = p.stage === "needs_you";
  return (
    <tr onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onClick={() => onOpen(p.id)} style={{
      borderTop: "1px solid #EEF0F3", cursor: "pointer",
      background: hover ? "#FBFBFC" : (selected ? "#F6FDF9" : "transparent"),
    }}>
      <td style={{ padding: "14px 8px 14px 20px", width: 30 }} onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={selected} onChange={() => onToggle(p.id)} style={{
          width: 14, height: 14, accentColor: "#10B981", cursor: "pointer",
        }}/>
      </td>
      <td style={{ padding: "14px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar initials={p.initials} kind="patient" size={30} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, minWidth: 0 }}>
            <span style={{ fontWeight: 500, color: "#0B0F14" }}>{p.name}</span>
            <span className="mono" style={{ fontSize: 12, color: "#9CA3AF" }}>{p.phoneMask}</span>
          </div>
        </div>
      </td>
      <td style={{ padding: "14px 12px", color: "#374151" }}>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
          <span style={{ fontWeight: 500 }} className="mono">{p.overdue}</span>
          <span style={{ fontSize: 12, color: "#9CA3AF" }}>{p.reason}</span>
        </div>
      </td>
      <td style={{ padding: "14px 12px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
          <StageBadge stage={p.stage} />
          {isNeeds && p.handoff && (
            <span style={{ fontSize: 11.5, color: "#B45309" }}>
              {HANDOFF[p.handoff].label}
            </span>
          )}
        </div>
      </td>
      <td style={{ padding: "14px 12px", color: "#6B7280", fontSize: 13 }}>
        {p.activity}
      </td>
      <td style={{ padding: "14px 12px", color: isNeeds ? "#B91C1C" : "#0B0F14", fontWeight: isNeeds ? 500 : 400 }}>
        {p.nextStep}
      </td>
      <td style={{ padding: "14px 20px 14px 12px", textAlign: "right" }} className="mono">
        ${p.value.toLocaleString()}
      </td>
      <td style={{ padding: "14px 20px 14px 0", color: "#9CA3AF" }}>
        <span style={{ display: "inline-flex", opacity: hover ? 1 : 0.5 }}>{I.chevronRight}</span>
      </td>
    </tr>
  );
};

const QueueView = ({ onOpenThread, onCompose, filter, setFilter }) => {
  const [selected, setSelected] = React.useState(new Set());
  const toggle = id => {
    const n = new Set(selected);
    n.has(id) ? n.delete(id) : n.add(id);
    setSelected(n);
  };

  const counts = React.useMemo(() => {
    const c = { all: PATIENTS.length };
    FILTERS.forEach(f => { if (f.id !== "all") c[f.id] = PATIENTS.filter(p => matchFilter(p, f.id)).length; });
    return c;
  }, []);

  const filtered = PATIENTS.filter(p => matchFilter(p, filter));

  return (
    <div style={{ padding: "24px 32px 80px", display: "flex", flexDirection: "column", gap: 20 }}>
      {/* page header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Re-engagement
            </h1>
            <Pill tone="slate" size="sm">Beta</Pill>
          </div>
          <div style={{ color: "#6B7280", marginTop: 6, fontSize: 13.5 }}>
            Bring overdue patients back. You start the conversation, Skrypt AI takes it from there.
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 12.5, color: "#6B7280" }}>
            Last AI action <span style={{ color: "#0B0F14", fontWeight: 500 }}>2 min ago</span>
          </span>
          <Btn icon={I.plus} kind="primary" onClick={onCompose}>Start outreach</Btn>
        </div>
      </div>

      {/* metric strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        <MetricTile eyebrow="Overdue patients" value={METRICS.overdue}
          sub="Pulled from Open Dental · refreshed 06:00" />
        <MetricTile eyebrow="In active outreach" value={METRICS.inOutreach}
          sub="Skrypt AI is currently working these" />
        <MetricTile
          eyebrow="Booked from re-engagement"
          value={METRICS.bookedThisMonth.count}
          sub={<span>This month · <span className="mono" style={{ color: "#047857", fontWeight: 500 }}>${METRICS.bookedThisMonth.value.toLocaleString()}</span> recovered</span>}
          accent="#047857"
        >
          <div style={{ marginTop: 4 }}>
            <Sparkline data={METRICS.trend} />
          </div>
        </MetricTile>
        <MetricTile eyebrow="Needs you" value={METRICS.needsYou}
          accent={METRICS.needsYou ? "#B91C1C" : "#0B0F14"}
          sub="Handoffs awaiting human reply" />
      </div>

      {/* filters + table */}
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px", borderBottom: "1px solid #EEF0F3", gap: 12, flexWrap: "wrap"
        }}>
          <FilterTabs active={filter} onChange={setFilter} counts={counts} />
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {selected.size > 0 ? (
              <>
                <span style={{ fontSize: 12.5, color: "#6B7280" }}>{selected.size} selected</span>
                <Btn kind="primary" icon={I.send}>Start outreach for {selected.size}</Btn>
                <Btn kind="ghost" onClick={() => setSelected(new Set())}>Clear</Btn>
              </>
            ) : (
              <>
                <Btn kind="ghost" icon={I.filter}>Filter</Btn>
                <Btn kind="ghost" icon={I.calendar}>Sort: Overdue ↑</Btn>
              </>
            )}
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: "#FBFBFC" }}>
                <th style={th(8, 20)}></th>
                <th style={th(12)}>Patient</th>
                <th style={th(12)}>Overdue / reason</th>
                <th style={th(12)}>Stage</th>
                <th style={th(12)}>Last activity</th>
                <th style={th(12)}>Next step</th>
                <th style={{ ...th(20, 12), textAlign: "right" }}>Est. value</th>
                <th style={th(0, 20)}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} style={{
                  padding: "60px 20px", textAlign: "center", color: "#6B7280",
                  borderTop: "1px solid #EEF0F3"
                }}>
                  Nothing here yet. Try a different filter.
                </td></tr>
              ) : filtered.map(p => (
                <Row key={p.id} p={p} onOpen={onOpenThread}
                     selected={selected.has(p.id)} onToggle={toggle} />
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

function th(rPad = 12, lPad) {
  return {
    textAlign: "left", padding: `10px ${rPad}px 10px ${lPad ?? 12}px`,
    fontSize: 11, fontWeight: 500, color: "#6B7280",
    letterSpacing: "0.06em", textTransform: "uppercase",
    borderBottom: "1px solid #EEF0F3",
  };
}

window.QueueView = QueueView;


// ===== thread.jsx =====
// Thread detail view — patient header, AI Plan card, conversation, action bar.

const PlanCard = ({ plan, paused, onPause, onTakeOver, onChangeGoal }) => {
  if (!plan) {
    return (
      <Card style={{ padding: 16, background: "#FAFBFC", borderStyle: "dashed" }}>
        <Eyebrow style={{ marginBottom: 6 }}>AI plan</Eyebrow>
        <div style={{ fontSize: 13.5, color: "#6B7280" }}>
          Skrypt AI will spin up a plan once you send the first message.
        </div>
      </Card>
    );
  }
  const isResolved = plan.status.startsWith("Resolved");
  const isPaused = paused || plan.status.startsWith("Paused");

  return (
    <Card style={{
      padding: 16, position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 60%)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar initials="S" kind="ai" size={28} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{ fontWeight: 600, fontSize: 13.5 }}>Skrypt AI · plan</span>
            <span style={{ fontSize: 11.5, color: "#6B7280" }}>Manages this conversation autonomously</span>
          </div>
        </div>
        <Pill tone={isResolved ? "teal" : isPaused ? "slate" : "teal"} dot={!isResolved && !isPaused}>
          {isResolved ? "Resolved" : isPaused ? "Paused" : "Active"}
        </Pill>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 14px",
        fontSize: 13.5, alignItems: "baseline",
      }}>
        <span style={planLabel}>Goal</span>
        <span style={{ color: "#0B0F14", fontWeight: 500 }}>{plan.goal}</span>

        <span style={planLabel}>Status</span>
        <span style={{ color: "#374151" }}>{plan.status}</span>

        <span style={planLabel}>Next</span>
        <span style={{ color: "#374151" }}>{plan.next}</span>

        <span style={planLabel}>Escalates if</span>
        <span style={{ color: "#6B7280", fontStyle: plan.escalate === "—" ? "italic" : "normal" }}>
          {plan.escalate}
        </span>
      </div>

      {!isResolved && (
        <div style={{ display: "flex", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid #EEF0F3" }}>
          <Btn kind="warn" icon={I.user} onClick={onTakeOver}>Take over</Btn>
          <Btn kind="secondary" icon={I.pause} onClick={onPause}>{isPaused ? "Resume AI" : "Pause AI"}</Btn>
          <Btn kind="ghost" icon={I.edit} onClick={onChangeGoal}>Change goal</Btn>
        </div>
      )}
    </Card>
  );
};
const planLabel = {
  fontSize: 11, fontWeight: 500, color: "#9CA3AF",
  letterSpacing: "0.06em", textTransform: "uppercase",
};

const Bubble = ({ m, isLast }) => {
  if (m.kind === "event") {
    return (
      <div style={{ textAlign: "center", color: "#9CA3AF", fontSize: 12, fontStyle: "italic", padding: "10px 8px" }}>
        — {m.text} —
      </div>
    );
  }
  const cfg = {
    patient: { side: "left",  bg: "#FFFFFF", border: "#E8EAEE", accent: null,        avatarKind: "patient" },
    staff:   { side: "right", bg: "#FFFBEB", border: "#FDE68A", accent: "#B45309",   avatarKind: "staff",   labelTone: "STAFF" },
    ai:      { side: "right", bg: "#F8FAFC", border: "#E2E8F0", accent: "#475569",   avatarKind: "ai",      labelTone: "AI · SASHA" },
  }[m.who];

  const isRight = cfg.side === "right";
  return (
    <div style={{
      display: "flex", gap: 10, alignItems: "flex-start",
      flexDirection: isRight ? "row-reverse" : "row",
      padding: "6px 0",
    }}>
      <div style={{ paddingTop: 18 }}>
        <Avatar initials={m.who === "patient" ? m.author.split(" ").map(s=>s[0]).join("").slice(0,2) : (m.who === "staff" ? "MC" : "S")}
                kind={cfg.avatarKind} size={28}/>
      </div>
      <div style={{ maxWidth: "72%", display: "flex", flexDirection: "column", alignItems: isRight ? "flex-end" : "flex-start", gap: 4 }}>
        <div style={{
          display: "flex", gap: 8, alignItems: "baseline",
          flexDirection: isRight ? "row-reverse" : "row",
        }}>
          {cfg.labelTone ? (
            <span style={{
              fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em",
              color: cfg.accent, textTransform: "uppercase",
            }}>{cfg.labelTone === "AI · SASHA" ? "Skrypt AI" : m.author}</span>
          ) : (
            <span style={{ fontSize: 12, fontWeight: 500, color: "#0B0F14" }}>{m.author}</span>
          )}
          <span style={{ fontSize: 11.5, color: "#9CA3AF" }}>{m.time}</span>
        </div>
        <div style={{
          background: cfg.bg, border: `1px solid ${cfg.border}`,
          borderRadius: 12, padding: "10px 13px",
          fontSize: 13.75, color: "#0B0F14", lineHeight: 1.5,
          ...(cfg.accent && !isRight ? { borderLeft: `2px solid ${cfg.accent}` } : {}),
          ...(cfg.accent && isRight  ? { borderRight: `2px solid ${cfg.accent}` } : {}),
          ...(m.draft ? { opacity: 0.7, borderStyle: "dashed" } : {}),
        }}>
          {m.draft && (
            <div style={{
              fontSize: 10.5, fontWeight: 600, color: "#475569",
              letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4,
            }}>Drafted · sending in {m.time}</div>
          )}
          {m.text}
        </div>
      </div>
    </div>
  );
};

const ThreadDetail = ({ patient, onBack }) => {
  const t = THREADS[patient.id] || { plan: null, messages: [] };
  const [paused, setPaused] = React.useState(false);
  const [tookOver, setTookOver] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [patient.id]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#F6F7F9" }}>
      {/* Patient header */}
      <div style={{
        background: "#fff", borderBottom: "1px solid #E8EAEE",
        padding: "16px 28px", display: "flex", alignItems: "center", gap: 16,
      }}>
        <button onClick={onBack} style={{
          background: "transparent", border: "none", color: "#6B7280",
          display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13,
        }}>
          {I.arrowLeft} <span>All re-engagements</span>
        </button>
        <span style={{ width: 1, height: 22, background: "#E8EAEE" }}/>
        <Avatar initials={patient.initials} kind="patient" size={38} />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontWeight: 600, fontSize: 16 }}>{patient.name}</span>
            <span className="mono" style={{ fontSize: 12.5, color: "#6B7280" }}>{patient.phoneMask}</span>
            <button style={{
              background: "transparent", border: "1px solid #E8EAEE", borderRadius: 6,
              padding: "1px 8px", fontSize: 11, color: "#6B7280", cursor: "pointer",
            }}>Reveal</button>
          </div>
          <div style={{ fontSize: 12.5, color: "#6B7280", display: "flex", gap: 12, marginTop: 3 }}>
            <span>Overdue {patient.overdue}</span>
            <span>·</span>
            <span>Last visit {patient.lastVisit}</span>
            <span>·</span>
            <span>{patient.reason}</span>
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
          <StageBadge stage={patient.stage} />
          <Btn kind="ghost" icon={I.more} />
        </div>
      </div>

      {/* Body: 2 columns */}
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Left rail — plan + meta */}
        <div style={{
          width: 340, flex: "0 0 340px", borderRight: "1px solid #E8EAEE",
          padding: 20, display: "flex", flexDirection: "column", gap: 14, overflowY: "auto",
        }}>
          <PlanCard plan={t.plan} paused={paused}
            onPause={() => setPaused(!paused)}
            onTakeOver={() => setTookOver(true)}
            onChangeGoal={() => {}} />

          <Card style={{ padding: 16 }}>
            <Eyebrow style={{ marginBottom: 10 }}>Patient context</Eyebrow>
            <Meta label="Last visit" value={patient.lastVisit}/>
            <Meta label="Overdue" value={`${patient.overdue} (${patient.overdueDays} days)`}/>
            <Meta label="Reason" value={patient.reason}/>
            <Meta label="Est. value" value={`$${patient.value.toLocaleString()}`}/>
            <Meta label="Provider" value="Dr. Chen" last/>
          </Card>

          <Card style={{ padding: 16 }}>
            <Eyebrow style={{ marginBottom: 10 }}>Audit log</Eyebrow>
            <Audit time="Today 9:14 AM" text="Skrypt AI proposed 2 slots" />
            <Audit time="Yesterday 7:02 PM" text="Skrypt AI checked schedule" />
            <Audit time="Yesterday 5:49 PM" text="Skrypt AI took over thread" />
            <Audit time="Yesterday 4:12 PM" text="Maria sent opener" last />
          </Card>
        </div>

        {/* Right rail — conversation */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          <div ref={scrollRef} style={{
            flex: 1, overflowY: "auto", padding: "20px 28px",
            display: "flex", flexDirection: "column", gap: 6,
          }}>
            {t.messages.length === 0 ? (
              <EmptyConversation patient={patient} />
            ) : (
              <>
                {t.messages.map((m, i) => <Bubble key={i} m={m} isLast={i === t.messages.length - 1} />)}
                {t.pending && <Bubble m={t.pending} />}
              </>
            )}
          </div>

          {/* Composer / action bar */}
          <Composer patient={patient} tookOver={tookOver} paused={paused}
                    onTakeOver={() => setTookOver(true)} />
        </div>
      </div>
    </div>
  );
};

const Meta = ({ label, value, last }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", gap: 12,
    padding: "6px 0", borderBottom: last ? "none" : "1px dashed #EEF0F3",
    fontSize: 13,
  }}>
    <span style={{ color: "#6B7280" }}>{label}</span>
    <span style={{ color: "#0B0F14", fontWeight: 500, textAlign: "right" }}>{value}</span>
  </div>
);

const Audit = ({ time, text, last }) => (
  <div style={{
    display: "flex", flexDirection: "column", padding: "6px 0",
    borderBottom: last ? "none" : "1px dashed #EEF0F3", fontSize: 12.5,
  }}>
    <span style={{ color: "#0B0F14" }}>{text}</span>
    <span style={{ color: "#9CA3AF", fontSize: 11.5 }}>{time}</span>
  </div>
);

const EmptyConversation = ({ patient }) => (
  <div style={{
    margin: "auto", maxWidth: 420, textAlign: "center",
    padding: 32, color: "#6B7280",
  }}>
    <div style={{
      width: 48, height: 48, borderRadius: 12, background: "#F1F5F9",
      display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#475569",
      marginBottom: 14,
    }}>{I.send}</div>
    <div style={{ fontSize: 15, fontWeight: 600, color: "#0B0F14" }}>No conversation yet</div>
    <div style={{ marginTop: 6, fontSize: 13.5 }}>
      Send the first message to {patient.name.split(" ")[0]}. Skrypt AI will jump in once they reply.
    </div>
  </div>
);

const Composer = ({ patient, tookOver, paused, onTakeOver }) => {
  const [text, setText] = React.useState("");
  const aiActive = !tookOver && !paused;
  return (
    <div style={{
      borderTop: "1px solid #E8EAEE", background: "#FFFFFF",
      padding: "12px 28px 16px",
    }}>
      {aiActive && (
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "8px 12px", marginBottom: 10,
          background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10,
          fontSize: 12.5, color: "#475569",
        }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Avatar initials="S" kind="ai" size={20}/>
            Skrypt AI is handling this conversation. Take over to send manually.
          </span>
          <Btn kind="warn" icon={I.user} onClick={onTakeOver} style={{ padding: "5px 10px", fontSize: 12 }}>
            Take over
          </Btn>
        </div>
      )}
      <div style={{
        display: "flex", alignItems: "flex-end", gap: 10,
        border: "1px solid #D8DBE0", borderRadius: 12, padding: 10, background: "#fff",
      }}>
        <textarea
          rows={1}
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={aiActive}
          placeholder={aiActive ? "Take over the conversation to type a reply…" : "Write a message to " + patient.name.split(" ")[0] + "…"}
          style={{
            flex: 1, resize: "none", border: "none", outline: "none",
            fontSize: 14, padding: 4, color: "#0B0F14",
            background: "transparent",
            minHeight: 36,
          }}
        />
        <div style={{ display: "flex", gap: 6 }}>
          <Btn kind="ghost" style={{ padding: 8 }}>{I.calendar}</Btn>
          <Btn kind="primary" icon={I.send} disabled={aiActive || !text.trim()}
               style={{ opacity: (aiActive || !text.trim()) ? 0.5 : 1 }}>Send</Btn>
        </div>
      </div>
      <div style={{
        marginTop: 10, display: "flex", justifyContent: "space-between",
        fontSize: 12, color: "#6B7280",
      }}>
        <span>Hand off back to AI any time · 48h auto-nudge if no reply · Patient can reply STOP to opt out</span>
        <span style={{ display: "flex", gap: 14 }}>
          <a href="#" onClick={e=>e.preventDefault()} style={linkS}>Add note</a>
          <a href="#" onClick={e=>e.preventDefault()} style={linkS}>Mark resolved</a>
        </span>
      </div>
    </div>
  );
};
const linkS = { color: "#4B5563", textDecoration: "none", borderBottom: "1px dashed #CBD5E1" };

window.ThreadDetail = ThreadDetail;


// ===== compose.jsx =====
// Slide-in compose panel — staff writes the opener.

const TEMPLATES = [
  { id: "hyg", label: "Due for hygiene", body: "Hi {first} — {staff} from Clearstone Dental. It's been a while since we've seen you for a cleaning, hope you're doing well! Want me to help find a time?" },
  { id: "miss", label: "Missed appointment", body: "Hi {first} — {staff} from Clearstone Dental. We missed you at your last appointment, want to get something back on the books?" },
  { id: "tx", label: "Treatment plan ready", body: "Hi {first} — {staff} from Clearstone Dental. Dr. Chen put together a treatment plan for you a while back. Want me to walk you through scheduling it?" },
  { id: "blank", label: "Custom", body: "" },
];

const ComposePanel = ({ open, onClose, onSend }) => {
  const [patientId, setPatientId] = React.useState("p-eve");
  const [tplId, setTplId] = React.useState("hyg");
  const [text, setText] = React.useState("");
  const [sending, setSending] = React.useState(false);

  const patient = PATIENTS.find(p => p.id === patientId);
  const candidates = PATIENTS.filter(p => p.stage === "not_started");

  React.useEffect(() => {
    const t = TEMPLATES.find(t => t.id === tplId);
    if (!t) return;
    const filled = t.body
      .replace("{first}", patient ? patient.name.split(" ")[0] : "")
      .replace("{staff}", "Maria");
    setText(filled);
  }, [tplId, patientId]);

  if (!open) return null;

  const handleSend = () => {
    setSending(true);
    setTimeout(() => { setSending(false); onSend(); }, 600);
  };

  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.32)", zIndex: 50,
      }} />
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: 480,
        background: "#fff", zIndex: 51, boxShadow: "-12px 0 40px rgba(15,23,42,0.08)",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{
          padding: "16px 22px", borderBottom: "1px solid #E8EAEE",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Start outreach</div>
            <div style={{ fontSize: 12.5, color: "#6B7280" }}>You send the opener — Skrypt AI takes over from there.</div>
          </div>
          <button onClick={onClose} style={{
            background: "transparent", border: "none", color: "#6B7280",
            display: "inline-flex", padding: 6, cursor: "pointer",
          }}>{I.x}</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 22, display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Recipient */}
          <div>
            <Eyebrow style={{ marginBottom: 8 }}>Recipient</Eyebrow>
            <div style={{
              display: "flex", flexDirection: "column", gap: 6,
              border: "1px solid #E8EAEE", borderRadius: 10, padding: 4, background: "#FBFBFC",
            }}>
              {candidates.slice(0, 3).map(p => (
                <button key={p.id} onClick={() => setPatientId(p.id)} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "8px 10px",
                  borderRadius: 8, border: "none", textAlign: "left",
                  background: patientId === p.id ? "#ECFDF5" : "transparent",
                  cursor: "pointer",
                }}>
                  <Avatar initials={p.initials} kind="patient" size={30}/>
                  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, flex: 1 }}>
                    <span style={{ fontWeight: 500, fontSize: 13.5 }}>{p.name}</span>
                    <span style={{ fontSize: 12, color: "#6B7280" }}>
                      Overdue {p.overdue} · {p.reason}
                    </span>
                  </div>
                  {patientId === p.id && <span style={{ color: "#10B981" }}>{I.check}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <Eyebrow style={{ marginBottom: 8 }}>Opener</Eyebrow>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
              {TEMPLATES.map(t => (
                <button key={t.id} onClick={() => setTplId(t.id)} style={{
                  padding: "5px 11px", borderRadius: 999, fontSize: 12.5,
                  border: `1px solid ${tplId === t.id ? "#A7F3D0" : "#E8EAEE"}`,
                  background: tplId === t.id ? "#ECFDF5" : "#fff",
                  color: tplId === t.id ? "#047857" : "#4B5563",
                  cursor: "pointer", fontWeight: 500,
                }}>{t.label}</button>
              ))}
            </div>
            <textarea value={text} onChange={e => setText(e.target.value)} rows={5} style={{
              width: "100%", border: "1px solid #D8DBE0", borderRadius: 10,
              padding: "10px 12px", fontSize: 13.5, lineHeight: 1.5, resize: "vertical",
              outline: "none", color: "#0B0F14",
            }}/>
            <div style={{ marginTop: 6, fontSize: 12, color: "#6B7280", display: "flex", justifyContent: "space-between" }}>
              <span>Skrypt AI will follow up after {patient ? patient.name.split(" ")[0] : "the patient"} replies.</span>
              <span className="mono">{text.length} / 320</span>
            </div>
          </div>

          {/* AI handoff plan */}
          <div>
            <Eyebrow style={{ marginBottom: 8 }}>What Skrypt AI will do next</Eyebrow>
            <Card style={{ padding: 12, background: "#F8FAFC", borderColor: "#E2E8F0" }}>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
                <li>Reply to incoming messages with the goal: <strong>book a {patient ? patient.reason.toLowerCase() : "visit"}</strong></li>
                <li>Check Dr. Chen's open slots and propose 2 times that fit</li>
                <li>Book the slot if patient confirms</li>
                <li>Hand back to you if patient asks anything off-script</li>
              </ul>
            </Card>
          </div>

          {/* Send window */}
          <div>
            <Eyebrow style={{ marginBottom: 8 }}>Send window</Eyebrow>
            <div style={{ display: "flex", gap: 6 }}>
              {["Send now", "Business hours only", "Schedule…"].map((l, i) => (
                <button key={l} style={{
                  flex: 1, padding: "8px 10px", borderRadius: 8, fontSize: 12.5,
                  border: `1px solid ${i === 1 ? "#A7F3D0" : "#E8EAEE"}`,
                  background: i === 1 ? "#ECFDF5" : "#fff",
                  color: i === 1 ? "#047857" : "#4B5563", fontWeight: 500, cursor: "pointer",
                }}>{l}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          padding: "14px 22px", borderTop: "1px solid #E8EAEE",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
        }}>
          <span style={{ fontSize: 12.5, color: "#6B7280" }}>
            Will send during business hours
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <Btn kind="secondary" onClick={onClose}>Cancel</Btn>
            <Btn kind="primary" icon={I.send} onClick={handleSend}
                 disabled={sending || !text.trim()}>
              {sending ? "Sending…" : "Send & hand to Skrypt AI"}
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
};

window.ComposePanel = ComposePanel;


// ===== notes.jsx =====
// Floating "design notes" pill explaining decisions for the submission.

const NotesPanel = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", zIndex: 80,
      }}/>
      <div style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: "min(720px, calc(100vw - 48px))", maxHeight: "min(82vh, 720px)",
        background: "#fff", borderRadius: 16, zIndex: 81, overflow: "hidden",
        display: "flex", flexDirection: "column", border: "1px solid #E8EAEE",
        boxShadow: "0 24px 60px rgba(15,23,42,0.18)",
      }}>
        <div style={{
          padding: "16px 22px", borderBottom: "1px solid #E8EAEE",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 24, height: 24, borderRadius: 6, background: "#0F172A",
              color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}>{I.sparkle}</span>
            <span style={{ fontWeight: 600, fontSize: 15 }}>Design notes</span>
            <Pill tone="slate" size="sm">For the submission</Pill>
          </div>
          <button onClick={onClose} style={{
            background: "transparent", border: "none", color: "#6B7280", cursor: "pointer", padding: 4,
          }}>{I.x}</button>
        </div>
        <div style={{ overflowY: "auto", padding: "20px 26px 28px", color: "#0B0F14", fontSize: 13.5, lineHeight: 1.6 }}>
          <Section title="Page structure — two altitudes, not one">
            Re-engagement is a cohort problem dressed up as a chat tool. Landing page is a queue of overdue patients with stage,
            next step, and dollar value; click a row to drill into a single thread. Designing the surface only as a list of
            chats would hide the question staff actually has: <em>who needs me right now, and how is this campaign performing.</em>
          </Section>

          <Section title="The AI Plan card is the trust mechanism">
            A chat log alone makes staff feel out of control of an autonomous system. The Plan card states the AI's goal,
            current status, next scheduled action, and the conditions under which it will escalate — making the AI a
            <em> managed system</em> rather than a chat participant. Take-over and pause are first-class buttons.
          </Section>

          <Section title="Three-author conversation, three differentiators">
            Patient, Staff and AI need to be readable at skim, scan, and read distance. Layering: patient on the left
            (default voice), staff and AI on the right with distinct avatars (clay-tone initials vs. dark "S" monogram),
            small uppercase author labels above each bubble, and a colored side-border (clay for staff, slate for AI).
            Crucially, AI is rendered in <em>slate, not teal</em> — teal in this product means "good outcome", and using
            it on every AI message would subconsciously read as "win".
          </Section>

          <Section title="AI responses vs. AI actions are separate UI">
            What the AI <em>says</em> goes in a bubble. What the AI <em>does</em> (booked the slot, checked the schedule,
            handed off, sent a 48h nudge) renders as inline italic event markers between bubbles. This split keeps the
            audit trail visible without cluttering the message stream. The Audit log card on the left rail is the same
            data, sorted reverse-chronologically, for compliance/review use.
          </Section>

          <Section title="Handoff has 3 reasons, not 1">
            "Needs You" routes feel useless if everything lands in one bucket. Three reasons cover most cases: off-script
            question, no matching slot, patient asked for a human. The reason chip surfaces under the Stage badge in the
            queue so staff can triage at a glance without opening every thread.
          </Section>

          <Section title="Restraint that matches the host product">
            Hairline borders, no shadows, one font family, three weights, eyebrow labels in 11px tracked uppercase,
            sparing iconography. No sparklines or sentiment scores in the queue table — the host product doesn't decorate
            data and neither should this. The one sparkline (booked trend) earns its place because staff genuinely cares
            about whether re-engagement is producing wins.
          </Section>

          <Section title="What I'd flag in the submission">
            <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>
              <li>The AI persona ("Skrypt AI") is named and disclosed — patients should know they're talking to an automated assistant. Not just a UX call; aligns with where SMS/healthcare regulation is heading.</li>
              <li>Approval gating is intentionally <em>off</em> — if staff has to approve every AI message, the AI is decorative.</li>
              <li>Single named-AI booking action (writes to schedule directly) is a demo-stage assumption; production likely wants a soft-hold + human confirm step.</li>
              <li>Empty state for "no overdue patients" is intentionally absent — in reality the table never has zero rows once Open Dental is connected. The real empty state is a not-yet-integrated CTA.</li>
            </ul>
          </Section>
        </div>
      </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 18 }}>
    <div style={{ fontSize: 13, fontWeight: 600, color: "#0B0F14", marginBottom: 4 }}>{title}</div>
    <div style={{ color: "#374151" }}>{children}</div>
  </div>
);

window.NotesPanel = NotesPanel;


// ===== app.jsx =====
const { useState } = React;

const App = () => {
  const [view, setView] = useState({ kind: "queue" }); // {kind:'queue'} | {kind:'thread', id}
  const [filter, setFilter] = useState("all");
  const [composeOpen, setComposeOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const openThread = (id) => setView({ kind: "thread", id });
  const backToQueue = () => setView({ kind: "queue" });

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  };

  const handleSent = () => {
    setComposeOpen(false);
    showToast("Opener sent. Skrypt AI is standing by.");
  };

  const patient = view.kind === "thread" ? PATIENTS.find(p => p.id === view.id) : null;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }} data-screen-label={view.kind === "thread" ? "Thread detail" : "Queue"}>
      <Sidebar />
      <main style={{ flex: 1, minWidth: 0, position: "relative" }}>
        {view.kind === "queue" ? (
          <QueueView
            onOpenThread={openThread}
            onCompose={() => setComposeOpen(true)}
            filter={filter}
            setFilter={setFilter}
          />
        ) : (
          <ThreadDetail patient={patient} onBack={backToQueue} />
        )}
      </main>

      <ComposePanel open={composeOpen} onClose={() => setComposeOpen(false)} onSend={handleSent} />
      <NotesPanel open={notesOpen} onClose={() => setNotesOpen(false)} />

      {/* Floating design-notes button */}
      <button onClick={() => setNotesOpen(true)} style={{
        position: "fixed", bottom: 20, right: 20, zIndex: 40,
        background: "#0F172A", color: "white", border: "none",
        borderRadius: 999, padding: "10px 16px", fontSize: 12.5, fontWeight: 500,
        display: "inline-flex", alignItems: "center", gap: 8,
        boxShadow: "0 8px 22px rgba(15,23,42,0.18)", cursor: "pointer",
      }}>
        <span style={{ display: "inline-flex" }}>{I.sparkle}</span>
        Design notes
      </button>

      {toast && (
        <div style={{
          position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
          background: "#0F172A", color: "white", padding: "10px 16px", borderRadius: 10,
          fontSize: 13, zIndex: 90, boxShadow: "0 8px 24px rgba(15,23,42,0.22)",
          display: "inline-flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ color: "#10B981", display: "inline-flex" }}>{I.check}</span>
          {toast}
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

