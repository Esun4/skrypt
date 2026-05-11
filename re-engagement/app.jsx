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
