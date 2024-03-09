'use client';

import Footer from "@/app/components/footer";
import {useAppConfig} from "@/hooks/use-app-config";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {usePathname} from "next/navigation";

export default function Layout({
                                 children
                               }: Readonly<{
  children: React.ReactNode
}>) {
  const {selectedNetwork} = useAppConfig()
  const pathname = usePathname();

  const links = [
    {
      name: "Overview",
      href: "/analytics/overview",
    },

    {
      name: "Pools",
      href: "/analytics/pools",
    },
    {
      name: "Tokens",
      href: "/analytics/tokens",
    },
  ]

  return (
    <section className="pt-32 pb-12 main-bg min-h-screen">
      <div className="container">

        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-4">
          <h2 className="text-section">
            Analytics {selectedNetwork.label}
          </h2>

          <div className="bg-white rounded-full p-1 shadow-md">
            {
              links.map(l => (
                <Link key={l.href} href={l.href} className={
                  ` ${pathname.startsWith(l.href) ? buttonVariants({
                    variant: "default",
                    roundness: "pill"
                  }) : buttonVariants({
                    variant: "outline",
                    roundness: "pill"
                  })} border-0`
                }
                >
                  {l.name}
                </Link>
              ))
            }
          </div>
        </div>
        {children}
        <Footer/>
      </div>
    </section>
  )
}
