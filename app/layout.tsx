import type {Metadata} from "next";
import localFont from "@next/font/local";
import 'react-modern-drawer/dist/index.css'
import "./globals.css";

import Header from "./components/header";
import ContextProviders from "@/app/components/context-providers/context-providers";

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
    <body className={`${segoeUI.className} relative`}>
    <ContextProviders>
      <Header/>
      {children}
    </ContextProviders>
    </body>
    </html>
  );
}
