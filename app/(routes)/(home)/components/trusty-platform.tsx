import ASSETS from "@/app/assets";
import { Card, CardTitle } from "@/components/ui/card";
import TitleBox from "@/components/ui/title-box";
import Image from "next/image";

const TrustyPlatform = () => {
  const data = [
    {
      icon: ASSETS.icons.ipfs,
      title: "IPFS Integration",
      description:
        "By utilizing the InterPlanetary File System (IPFS), 100K STAKE ensures a decentralized and resilient storage solution for important data, enhancing the overall stability and reliability of our platform.",
    },
    {
      icon: ASSETS.icons.diamond,
      title: "Chainlink Partnership",
      description:
        "100K STAKE has partnered with Chainlink to provide secure and reliable price feeds for our platform, ensuring that all data is accurate and up to date.",
    },
    {
      icon: ASSETS.icons.lockSearch,
      title: "Regular Security Audits",
      description:
        "Our platform undergoes regular security audits to ensure that all security measures are up to date and in line with the latest industry standards.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <TitleBox
          title="A Reliable Platform You Can Trust"
          description="At 100K STAKE , we understand the importance of trust and reliability in the crypto space."
        />

        <div className="pt-12">
          <div className="flex flex-wrap justify-center gap-8">
            {data.map((item, index) => (
              <Card
                className="py-12 max-w-96 min-w-80 flex items-center flex-col gap-3 text-center rounded-3xl"
                key={index}
              >
                <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustyPlatform;
