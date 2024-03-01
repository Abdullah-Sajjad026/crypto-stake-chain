import Footer from "@/app/components/footer";
import TeamMembers from "@/components/team-members";
import TitleBox from "@/components/ui/title-box";

export default function PageTeam() {
  return (
    <>
      <div className="main-bg bottom-white-layer min-h-screen bg-bottom" />
      <section className="-mt-[32rem] relative z-[1]">
        <TitleBox title="100K Stake Team" />
        <TeamMembers />
      </section>
      <section className=" main-bg top-white-layer -mt-4 pt-36">
        <Footer />
      </section>
    </>
  );
}
