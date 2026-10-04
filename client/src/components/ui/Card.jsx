import "./Card.css";

function Card({
  children,
  width = "420px",
}) {
  return (
    <div
      className="card"
      style={{ width }}
    >
      {children}
    </div>
  );
}

export default Card;