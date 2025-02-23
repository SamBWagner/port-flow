export default function Header({ className, children }) {
  return (
    <header className={className}>
      <h1 id="heading-page-name" className="heading-page-name heading-name">
        Sam Wagner
      </h1>
      {children}
    </header>
  );
}
