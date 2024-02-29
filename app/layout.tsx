import type { Metadata } from "next";
import localFont from "@next/font/local";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const segoeUI = localFont({
  src: [
    {
      path: "../public/fonts/segoe-ui/Segoe_UI.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/segoe-ui/Segoe_UI_Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-segoe-ui",
});

export const metadata: Metadata = {
  title: "100K Stake",
  description:
    "100k Stake is a decentralized platform for staking and yield farming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoeUI.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
