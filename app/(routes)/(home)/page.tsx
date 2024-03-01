import Hero from "./components/hero";
import Features from "./components/features";
import Partners from "./components/partners";
import Investors from "./components/investors";
import OurTeam from "./components/team";
import TrustyPlatform from "./components/trusty-platform";
import Footer from "@/app/components/footer";

export default function PageHome() {
  return (
    <>
      <Hero />
      <Features />
      <Partners />
      <Investors />
      <OurTeam />
      <div className="main-bg top-white-layer">
        <TrustyPlatform />
        <Footer />
      </div>
    </>
  );
}
