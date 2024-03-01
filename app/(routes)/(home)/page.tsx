import { Button } from "@/components/ui/button";
import Hero from "./components/hero";
import Features from "./components/features";
import Partners from "./components/partners";
import Investors from "./components/investors";
import TeamMembers from "@/components/team-members";
import OurTeam from "./components/team";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Partners />
      <Investors />
      <OurTeam />
    </>
  );
}
