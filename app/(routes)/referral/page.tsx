import Hero from "./components/hero";
import Highlights from "./components/highlights";
import WorkingMethod from "./components/working-method";
import Leaderboard, {columns} from "./components/leaderboard";
import type {LeaderboardEntry} from "./components/leaderboard";
import Footer from "@/app/components/footer";
import FaqsList from "@/app/(routes)/faqs/components/faqs-list";

async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const data: LeaderboardEntry[] = [
    {
      rank: 1,
      referrer: "0x1234...5678",
      referrals: 30,
      earnings: 10000,
    },
    {
      rank: 2,
      referrer: "0x1234...5678",
      referrals: 30,
      earnings: 10000,
    },
  ];
  return data;
}

export default async function PageReferral() {
  const leaderboardData = await getLeaderboard();

  const faqsData = [
    {
      question: "What is a referral program?",
      answer: "A referral program is a method of promoting products or services to new customers through referrals, usually word of mouth. Such referrals often happen spontaneously but businesses can influence this through appropriate strategies."
    },
    {
      question: "How do I refer someone?",
      answer: "You can refer someone by sharing your referral link with them. When they sign up using your referral link, they will be added to your referral list."
    },
    {
      question: "How do I earn rewards?",
      answer: "You earn rewards when someone signs up using your referral link and makes a purchase. You will earn a percentage of the purchase amount."
    },
    {
      question: "How do I track my referrals?",
      answer: "You can track your referrals in the referral dashboard. You will be able to see the number of referrals, the amount earned and other details."
    },
    {
      question: "How do I withdraw my earnings?",
      answer: "You can withdraw your earnings from the referral dashboard. You can choose to withdraw to your bank account or to your wallet."
    },
  ]

  return (
    <>
      <Hero/>
      <Highlights/>
      <WorkingMethod/>
      <Leaderboard columns={columns} data={leaderboardData}/>
      <section className=" -mt-32 pt-40 relative main-bg top-white-layer">
        <div className="container">

          <FaqsList
            data={faqsData}
          />
        </div>
        <Footer/>
      </section>
    </>
  );
}
