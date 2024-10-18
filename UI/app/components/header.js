export default function Header({className}) {
  return (
    <header>
      <h1
        id="heading-page-name"
        className={`heading-page-name heading-name ${className}`}
      >
        Sam Wagner
      </h1>
    </header>
  );
}
