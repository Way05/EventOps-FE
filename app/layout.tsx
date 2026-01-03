import type { Metadata } from "next";
import { Cabin, Libre_Franklin } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import NavBar from "@/components/NavBar";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event-Ops",
  description: "Event planning and management app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.variable} ${libreFranklin.variable} antialiased`}>
        <Theme>
          <div className="flex h-screen">
            <NavBar />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
