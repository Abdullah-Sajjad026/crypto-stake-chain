import Footer from "@/app/components/footer";
import TitleBox from "@/components/ui/title-box";
import SwapCalculator from "@/app/(routes)/swap/components/swap-calculator";
import {Card} from "@/components/ui/card";

export default function PageSwap() {

  return (
    <section className="main-bg min-h-screen pt-32">
      <div className="container pb-16">
        <TitleBox title="Lightning cryptocurrency exchange"/>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
          <div className="md:col-span-3">
            <Card></Card>
          </div>
          <div className="md:col-span-2">
            <SwapCalculator/>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
