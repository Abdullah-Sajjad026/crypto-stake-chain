import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="main-bg bottom-white-layer">
      <div className="container flex min-h-screen flex-col items-center pb-16 pt-32 md:flex-row">
        <div className="flex-1">
          <h1 className="text-section mb-12">Invite friends, earn rewards </h1>
          <p className="mb-16 text-lg text-gray-600">
            Simply invite your friends with your referral link and earn up to
            15% InfinityStakeChain commission from the referral. Its as easy as
            that!
          </p>
          <Button>Get My Referral Link</Button>
          <Button variant="white">How Does It Work</Button>
        </div>
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/dqcsk8rsc/image/upload/v1631783659/nextjs-ecommerce/hero-image_2x.png"
            alt="hero image"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
