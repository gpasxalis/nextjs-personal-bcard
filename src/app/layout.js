import { Fira_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["greek", "latin"],
})

export const metadata = {
  title: "Paschalis Grammenos | Digital Business Card",
  description: "Paschalis Grammenos digital business card powered by dalution.gr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
