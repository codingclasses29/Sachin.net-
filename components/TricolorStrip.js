export default function TricolorStrip({ className = "" }) {
  return (
    <div className={`tricolor-strip ${className}`} aria-hidden="true">
      <span className="tricolor-saffron" />
      <span className="tricolor-white" />
      <span className="tricolor-green" />
    </div>
  );
}
