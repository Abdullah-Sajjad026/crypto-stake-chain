import { Button } from "@/components/ui/button";



const Hero = () => {
  return (
    <section className="main-bg bottom-white-layer">
      <div className="container flex min-h-screen pt-32 pb-16 md:flex-row flex-col items-center">
        <div className="flex-1">
          <h1 className="text-section mb-12">
          Invite friends, earn rewards          </h1>
          <p className="text-lg text-gray-600 mb-16">
          Simply invite your friends with your referral link and earn up to 15% InfinityStakeChain commission from the referral. Its as easy as that!
          </p>
          <Button>
            Get My Referral Link
          </Button>
          <Button variant="white" >
          How Does It Work
            </Button>
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
