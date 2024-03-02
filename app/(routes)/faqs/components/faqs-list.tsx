import TitleBox from "@/components/ui/title-box";
import {Accordion, AccordionItem, AccordionContent, AccordionTrigger} from "@/components/ui/accordion";
import {Card} from "@/components/ui/card";

const FaqsList = ({data}: {
  data: {
    question: string;
    answer: string;
  }[]
}) => {

  return (
    <div>
      <TitleBox title={"FAQ"}/>
      <Accordion type="single" collapsible>
        <div className="flex flex-col gap-y-4 mt-4">
          {
            data.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-0 outline-0">
                <Card>
                  <AccordionTrigger className="font-bold">{faq.question}</AccordionTrigger>
                </Card>
                <AccordionContent className={"mt-1"}>
                  <Card>
                    {faq.answer}
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </div>
      </Accordion>
    </div>
  )
}

export default FaqsList;
