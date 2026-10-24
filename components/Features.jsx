import Icon from "./Icon";

const features = [
  { icon: "mic", title: "Joins every call", text: "Connect your calendar once. Nimbus shows up, records and transcribes, no bots to invite by hand." },
  { icon: "list", title: "Decisions & tasks", text: "Not a wall of text: a short summary, the decisions made and who owes what by when." },
  { icon: "search", title: "Search all meetings", text: "Ask \"what did we decide about pricing?\" and jump straight to that moment in the call." },
  { icon: "globe", title: "30+ languages", text: "Mixed-language calls are fine. Summaries arrive in the language your team reads." },
  { icon: "share", title: "Sends itself", text: "Summaries go to Slack, email or Notion automatically, right after the call ends." },
  { icon: "lock", title: "Private by default", text: "Recordings are encrypted and only shared with people who were in the meeting." },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Features</p>
          <h2>Everything after the meeting, <em>done.</em></h2>
        </div>
        <div className="features">
          {features.map((f) => (
            <article key={f.title} className="feature">
              <span className="feature__icon"><Icon name={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
