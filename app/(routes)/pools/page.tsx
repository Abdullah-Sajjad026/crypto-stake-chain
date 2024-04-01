import {Card} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Page() {
  return (
    <section className="pt-32 pb-12 main-bg min-h-screen">
      <div className="container">
        <h2 className="text-section">
          Pools
        </h2>

        <Card className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Flexible Lock-Up Choices</h3>
              <p className="text-muted-foreground text-sm">Explore various staking plans tailored to your preferences,
                offering
                different lock-up periods for optimal returns on your selected currency.</p>
            </div>
          </div>

          <section className="mt-8">
            <Accordion type="single" collapsible>

              <AccordionItem value={`pool-14-eth`} className="border-0 outline-0">
                <AccordionTrigger className="m-0 p-4 rounded-lg bg-primary-light ">
                  <div className="w-full flex justify-between items-center gap-4">
                    <div>
                      <h4 className="text-sm font-medium">ETH 14-Day Staking Pool</h4>
                    </div>
                    <div>

                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="m-0 p-0">
                  <div className="p-4 bg-red-500">
                    Content Here
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </section>

        </Card>
      </div>

    </section>
  )
}
