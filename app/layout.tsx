import type {Metadata} from "next";
import localFont from "@next/font/local";
import 'react-modern-drawer/dist/index.css'
import "./globals.css";

import Header from "./components/header";
import ContextProviders from "@/app/components/context-providers/context-providers";

const genera = localFont({
  src: [
    {
      path: "../public/fonts/genera/genera.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/genera/genera-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-genera",
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
    <body className={`${genera.className} relative`}>
    <ContextProviders>
      <Header/>
      {children}
    </ContextProviders>
    </body>
    </html>
  );
}
