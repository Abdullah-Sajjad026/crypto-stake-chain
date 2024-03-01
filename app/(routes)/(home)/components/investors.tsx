import ASSETS from "@/app/assets";
import TitleBox from "@/components/ui/title-box";
import Image from "next/image";

const Investors = () => {
  return (
    <section className="py-16">
      <div className="container">
        <TitleBox title="Our Investors" />

        <div className="pt-12">
          {/* a flex div for partners images with auto adjustments */}
          <div className="flex flex-wrap justify-center gap-12">
            {[...Array(9)].map((_, index) => (
              <Image
                src={
                  ASSETS.investors[
                    `i${index + 1}` as
                      | "i1"
                      | "i2"
                      | "i3"
                      | "i4"
                      | "i5"
                      | "i6"
                      | "i7"
                      | "i8"
                  ]
                }
                alt={`Investor ${index + 1}`}
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

export default Investors;
