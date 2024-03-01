import ASSETS from "@/app/assets";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TitleBox from "@/components/ui/title-box";
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
    <section className="py-16">
      <div className="">
        <div className="container">
          <TitleBox
            title="Empowering Features"
            description="Enhance Your Multi-Chain Staking Experience with 100K STAKE"
          />
        </div>
      </div>

      <div className="pt-12 ">
        <div className="container grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex">
              <div>
                <div className="bg-accent flex justify-center items-center h-12 w-12 rounded-xl">
                  <Image src={feature.icon} alt="icon" className="w-7 h-7" />
                </div>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-2">
                <h3 className="text-block">{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="flex mt-auto">
                  <Link
                    href={feature.cta.href}
                    className={
                      buttonVariants({
                        variant: "outline",
                      }) + " w-full rounded-full "
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
