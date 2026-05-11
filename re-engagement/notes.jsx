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
