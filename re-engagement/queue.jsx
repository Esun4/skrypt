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
