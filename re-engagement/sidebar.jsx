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
