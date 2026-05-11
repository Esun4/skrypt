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
