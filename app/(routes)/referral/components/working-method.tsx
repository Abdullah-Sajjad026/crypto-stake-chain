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
          <div className="flex flex-col gap-y-8 mt-12">
            {data.map((card, index) => (
              <RewardDetails {...card} key={index} />
            ))}
          </div>
        </Card>
        <div className="text-muted-foreground">
          <p className="text-center mt-12 w-3/4 mx-auto">
            Suppose you refer 30 friends who allocate a total of 100 ETH into
            staking. Based on 20% APR blockchain rewards and 15% commission,
            your referral bonus per annum is therefore <br /> 3 ETH (100 * 20% *
            15%).
          </p>

          <div className="w-3/4 mx-auto text-center mt-12">
            <h2 className="text-section mb-6">
              Your referral bonus is calculated by
            </h2>
            <p>
              <span className="text-bold"> 1- </span> The liquidity profit 100K
              Stake receive from your referral (Total Referral Commission)
              <br />
              <span className="text-bold"> 2-</span> The total number of friends
              you&apos;ve referred to 100K Stake (Referral Badges)
            </p>
          </div>

          <div className="w-3/4 mx-auto text-center mt-12">
            <h2 className="text-section mb-6">Payout</h2>
            <p>
              The bonus is paid out every hour, based on your referrals&apos;
              assets and referral progress badges. The bonus will be settled
              with the tokens pledged by your recommended friends, for example,
              if he is pledged ETH, then you will receive native tokens.
            </p>
          </div>

          <div className="w-3/4 mx-auto text-center mt-12">
            <h2 className="text-section mb-6">
              How do I join the 100K Stake referral program?
            </h2>
            <p>
              Anyone who stakes on a 100k Stake address is eligible to join our
              referral program and earn rewards. The number of successful
              referrals is determined by the number of referral accounts with
              active funds of $100 or more. For more information on how referral
              rewards are calculated, please see this FAQ.
            </p>
          </div>
        </div>
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
    <Card className="bg-accent flex flex-col md:flex-row gap-4 md:items-center">
      <div className="flex gap-4 flex-1 ">
        <div className="bg-white text-semibold flex items-center justify-center h-12 w-12 rounded-full">
          {noOfReferrals}
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="text-end self-center">
        {comissionPercentage}% of 100K Stake&apos;s commission
      </div>
    </Card>
  );
};

export default WorkingMethod;
