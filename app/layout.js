import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Sam Wagner's personal page discussing learning Rust and game development with Bevy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
