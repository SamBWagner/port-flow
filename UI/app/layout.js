import "./globals.css";
import { Cabin, Neuton, Fira_Code } from "next/font/google";

export const metadata = {
  title: "Sam Wagner",
  description:
    "Sam Wagner's personal page discussing learning Rust and game development with Bevy.",
};

const v2323 = Neuton({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
  variable: "--neuton",
});
const wellFleet = Cabin({
  subsets: ["latin"],
  weight: "400",
  variable: "--cabin",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400",
  variable: "--fira-code",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${v2323.variable} ${wellFleet.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
