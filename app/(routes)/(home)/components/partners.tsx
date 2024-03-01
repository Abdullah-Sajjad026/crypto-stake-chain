import ASSETS from "@/app/assets";
import TitleBox from "@/components/ui/title-box";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="py-16">
      <div className="container">
        <TitleBox
          title="Working together with partners"
          description="Partners from various industries trust us and help us to create a reliable ecosystem that benefits both individuals and businesses."
        />

        <div className="pt-12">
          {/* a flex div for partners images with auto adjustments */}
          <div className="flex flex-wrap justify-center gap-12">
            {[...Array(8)].map((_, index) => (
              <Image
                src={
                  ASSETS.partners[
                    `p${index + 1}` as
                      | "p1"
                      | "p2"
                      | "p3"
                      | "p4"
                      | "p5"
                      | "p6"
                      | "p7"
                      | "p8"
                  ]
                }
                alt={`Partner ${index + 1}`}
                key={index}
                className="w-40 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
