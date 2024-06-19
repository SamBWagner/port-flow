import "./globals.css";
import {  Open_Sans, Montserrat } from "next/font/google";

export const metadata = {
  title: "Sam Wagner",
  description:
    "Sam Wagner's personal page discussing learning Rust and game development with Bevy.",
};

const v2323 = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--montserrat",
});
const wellFleet = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--open-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${v2323.variable} ${wellFleet.variable}`}>
        {children}
      </body>
    </html>
  );
}
