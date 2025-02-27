export default function Header({ className, children, h2 }) {
  return (
    <header className={className}>
      {h2 ? (
        <h2 id="heading-page-name" className="heading-page-name heading-name">
          Sam Wagner
        </h2>
      ) : (
        <h1 id="heading-page-name" className="heading-page-name heading-name">
          Sam Wagner
        </h1>
      )}

      {children}
    </header>
  );
}
