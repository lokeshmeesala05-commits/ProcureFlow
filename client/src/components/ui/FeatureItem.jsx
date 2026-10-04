import "./FeatureItem.css";
function FeatureItem({ text }) {
  return (
    <div className="feature-item">
      <span>✔</span>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem;