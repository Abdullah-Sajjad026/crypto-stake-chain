import { Button } from "@/components/ui/button";
import Image from "next/image";
import GiftsDoodle from "@/app/assets/doodle-gifts.png";

const Hero = () => {
  return (
    <section className="main-bg bottom-white-layer">
      <div className="container flex min-h-screen flex-col items-center py-32 md:flex-row">
        <div className="flex-1">
          <h1 className="text-section mb-8">Invite friends, earn rewards </h1>
          <p className="mb-12 text-lg text-gray-600">
            Simply invite your friends with your referral link and earn up to
            15% InfinityStakeChain commission from the referral. Its as easy as
            that!
          </p>
          <div className="flex gap-x-4">
            <Button>Get My Referral Link</Button>
            <Button variant="white">How Does It Work</Button>
          </div>
        </div>
        <div className="flex-1">
          <Image src={GiftsDoodle} alt="Gifts Doodle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
