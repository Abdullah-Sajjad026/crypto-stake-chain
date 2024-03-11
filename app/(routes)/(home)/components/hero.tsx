import ASSETS from "@/app/assets";
import {Button} from "@/components/ui/button";
import {Card, CardTitle} from "@/components/ui/card";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="main-bg bottom-white-layer">
      <div className="container flex min-h-screen pt-32 pb-16 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center gap-4">
          <h2 className="text-[#69C3FF] text-title">
            Amplify Your Cross-Chain Staking
          </h2>
          <h1 className="text-4xl font-bold">
            Experience
            <span className="text-primary"> 100K STAKE</span>, your gateway to
            unbounded earnings in decentralized staking, powered by our robust
            smart contracts
          </h1>
          <h2 className="text-muted-foreground text-title">
            Stake, Earn, Soar with 100K STAKE.
          </h2>
          <div className="flex gap-4 items-center">
            <Button>Stake</Button>
            <Button variant="outline">Litepaper</Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 mx-auto">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={ASSETS.doodleMoneyBank}
          />
          <div className="flex-items-center justify-center mt-12">
            <Card
              className="border-white mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-md backdrop-saturate-150 w-64 rounded-3xl text-center">
              <CardTitle>Total Value Locked</CardTitle>
              <h2 className="text-primary text-section">$1,000,000,00</h2>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
