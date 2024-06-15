import "./globals.css";
import { Luckiest_Guy, Wellfleet } from "next/font/google";

export const metadata = {
  title: "Sam Wagner",
  description:
    "Sam Wagner's personal page discussing learning Rust and game development with Bevy.",
};

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--luckiest-guy",
});
const wellFleet = Wellfleet({
  subsets: ["latin"],
  weight: "400",
  variable: "--wellfleet",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable} ${wellFleet.variable}`}>
        {children}
      </body>
    </html>
  );
}
