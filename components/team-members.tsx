import ASSETS from "@/app/assets";
import Image, { StaticImageData } from "next/image";

const TeamMembers = () => {
  // Alex Wilson General Manager,Jonathan Johnston Senior Solidity Engineer, Mason Jones Senior Blockchain Engineer, Edward Taylor Senior Blockchain Engineer, Nicholas Swan Marketing & Community Manage
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
        <div className="flex flex-col items-center justify-center gap-16 pt-12">
          <TeamMember {...teamMembers[0]} />
          <div className="flex flex-wrap justify-center gap-16">
            {teamMembers.slice(1).map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = (props: {
  image: StaticImageData;
  name: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={props.image}
        alt={props.name}
        className="w-40 h-40 object-contain rounded-full mb-4"
      />
      <h4 className="text-block">{props.name}</h4>
      <p className="text-muted-foreground">{props.role}</p>
    </div>
  );
};

export default TeamMembers;
