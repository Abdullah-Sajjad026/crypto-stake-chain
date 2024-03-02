import { Card } from "@/components/ui/card";
import TitleBox from "@/components/ui/title-box";

const WorkingMethod = () => {
  const data = [
    {
      noOfReferrals: 3,
      comissionPercentage: 3,
    },
    {
      noOfReferrals: 5,
      comissionPercentage: 5,
    },
    {
      noOfReferrals: 10,
      comissionPercentage: 8,
    },
    {
      noOfReferrals: 20,
      comissionPercentage: 10,
    },
    {
      noOfReferrals: 25,
      comissionPercentage: 12,
    },
    {
      noOfReferrals: 30,
      comissionPercentage: 15,
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <TitleBox
          title="How does it work"
          description="Each category specifies how much of the 100K Stake commission you are eligible to get."
        />

        <Card className="bg-primary-light mt-12">
          <div className="flex justify-between gap-x-4">
            <h3 className="text-block">Number of referrals</h3>
            <h3 className="text-block">Referral bonus</h3>
          </div>
          {data.map((card) => (
            <RewardDetails {...card} key={card.title} />
          ))}
        </Card>
      </div>
    </section>
  );
};

const RewardDetails = ({
  noOfReferrals,
  comissionPercentage,
}: {
  noOfReferrals: number;
  comissionPercentage: number;
}) => {
  return (
    <Card className="flex flex-col md:flex-row gap-4">
      <span className="bg-white text-semibold flex items-center justify-center h-24 w-24 rounded-full">
        {noOfReferrals}
      </span>
    </Card>
  );
};

export default WorkingMethod;
