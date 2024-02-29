import ASSETS from "@/app/assets";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  const features = [
    {
      icon: ASSETS.icons.calculator,
      title: "Multi-Chain Liquidity Provision",
      description:
        "Contribute to the growth of the crypto ecosystem by providing liquidity across multiple blockchains and earning attractive interest on your supplied assets.",
      cta: {
        text: "View Supported Chains & Assets",
        href: "/liquidity",
      },
    },
    {
      icon: ASSETS.icons.dollarCoin,
      title: "Flexible Staking Options",
      description:
        "Tailor your staking experience with a wide variety of supported cryptocurrencies, allowing you to maximize your earnings potential based on your unique preferences and risk tolerance.",
      cta: {
        text: "Discover Staking Opportunities",
        href: "/staking",
      },
    },
    {
      icon: ASSETS.icons.vpnSecurity,
      title: "Discover Staking Opportunities",
      description:
        "Experience peace of mind with our safe and reliable decentralized smart contracts, designed to ensure the security and autonomy of your staking transactions.",
      cta: {
        text: "Browse Contracts List",
        href: "/contracts",
      },
    },
    {
      icon: ASSETS.icons.scores,
      title: "Rewarding Referral Program",
      description:
        "Share the benefits of 100K STAKE with friends and earn valuable rewards! Invite your network to join our platform and receive generous referral bonuses as they stake and grow their crypto assets.",
      cta: {
        text: "Invite Friends & Earn Rewards",
        href: "/referral",
      },
    },
  ];

  return (
    <section className="-mt-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-section">Empowering Features</h2>
          <p className="text-muted-foreground mt-2">
            Enhance Your Multi-Chain Staking Experience with 100K STAKE
          </p>
        </div>

        <div className="py-16 grid grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex">
              <div>
                <Image src={feature.icon} alt="icon" className="w-20" />
              </div>
              <div className="p-6 pt-0">
                <h3 className="text-block font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <div className="flex justify-end mt-4">
                  <Link
                    href={feature.cta.href}
                    className={
                      buttonVariants({
                        variant: "outline",
                        size: "icon",
                      }) + "rounded-4xl w-full"
                    }
                  >
                    {feature.cta.text}
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
