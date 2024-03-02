import TitleBox from "@/components/ui/title-box";
import {Card, CardTitle} from "@/components/ui/card";

const Highlights = () => {
  const data = [
    {
      title: "Earn 15% Extra Rewards through Referrals",
      description:
        "Refer friends to 100K Stake and earn an extra 15% reward on their staking interest. Share your referral link, and when your friend start staking, you'll receive a bonus on their earned interest. Start earning more with the 100K Stake Referral Program!",
    },
    {
      title: "Unlimited Payments per Hour",
      description:
        "At 100K Stake , we leverage the power of smart contracts and blockchain technology to enable a decentralized and trustless environment for transactions. This approach allows for a large number of transactions to be completed autonomously and securely and enjoy the convenience of unlimited payment processing every hour. Experience a new level of efficiency, transparency, and control with 100K Stake !",
    },
    {
      title: "Track Your Referrals with Ease",
      description:
        "Stay informed and up-to-date with your referral progress on 100K Stake. Our user-friendly dashboard allows you to easily track the number of successful referrals, the rewards you've earned, and your referred friends' staking activities. Monitor your referral performance and optimize your earnings with 100K Stake's intuitive referral tracking system!",
    },
  ];

  return (
    <section className="relative z-[1] -mt-20 py-16">
      <div className="container">
        <TitleBox title="Highlights" />
        <div className="flex flex-wrap justify-center gap-8 pt-12">
          {data.map(f => (
              <Card key={f.title} className={"py-12 max-w-96 min-w-80 flex flex-col items-center text-center gap-4"}>
                <h3 className={"text-block"}>{f.title}</h3>
                <p>
                    {f.description}
                </p>

              </Card>
          ))}
            </div>
      </div>
    </section>
  );
};

export default Highlights;
