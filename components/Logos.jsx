// Fictional company names, so the demo never implies a real customer.
const names = ["Northwind", "Lumen & Co", "Kestrel", "Brightpath", "Orbital", "Fernhill"];

export default function Logos() {
  return (
    <section className="logos">
      <div className="container">
        <p>Example customers (fictional)</p>
        <ul>
          {names.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
