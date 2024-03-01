import ASSETS from "@/app/assets";
import Image, { StaticImageData } from "next/image";

const TeamMembers = () => {
  const teamMembers = [
    {
      image: ASSETS.staff.lead,
      name: "Arthur Kennedy",
      role: "Founder & CTO",
    },
    {
      image: ASSETS.staff.s1,
      name: "Alex Wilson",
      role: "General Manager",
    },
    {
      image: ASSETS.staff.s2,
      name: "Jonathan Johnston",
      role: "Senior Solidity Engineer",
    },
    {
      image: ASSETS.staff.s3,
      name: "Mason Jones",
      role: "Senior Blockchain Engineer",
    },
    {
      image: ASSETS.staff.s4,
      name: "Edward Taylor",
      role: "Senior Blockchain Engineer",
    },
    {
      image: ASSETS.staff.s5,
      name: "Nicholas Swan",
      role: "Marketing & Community Manager",
    },
  ];

  // lead on first row single, others below flex wrapped
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-20 pt-12">
          <TeamMember {...teamMembers[0]} imgClasses="w-56 h-56" />

          <div className="flex flex-wrap justify-center gap-y-20">
            {teamMembers.slice(1).map((member, index) => (
              <div className=" md:w-2/3 lg:w-1/3" key={index}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({
  imgClasses = "",
  ...props
}: {
  image: StaticImageData;
  name: string;
  role: string;
  imgClasses?: string;
}) => {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={props.image}
        alt={props.name}
        className={`w-48 h-48 object-contain rounded-full mb-4 ${imgClasses}`}
      />
      <h4 className="text-block">{props.name}</h4>
      <p className="text-muted-foreground">{props.role}</p>
    </div>
  );
};

export default TeamMembers;
