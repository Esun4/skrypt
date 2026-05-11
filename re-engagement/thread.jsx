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
