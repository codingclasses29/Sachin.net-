export default function PageSection({
  children,
  alt = false,
  id,
  first = false,
  container = true,
  className = "",
}) {
  return (
    <section
      id={id}
      className={[
        "page-section",
        alt && "page-section-alt",
        first && "page-section-first",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {container ? <div className="container-x">{children}</div> : children}
    </section>
  );
}
