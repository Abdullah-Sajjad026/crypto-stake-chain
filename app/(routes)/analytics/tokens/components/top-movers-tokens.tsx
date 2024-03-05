import {MarketTokenItem} from "@/app/(routes)/analytics/tokens/components/top-tokens-table/columns";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";

const TopMoversTokens = ({data}: {
  data: MarketTokenItem[]
}) => {
  return (
    <Carousel>
      <div className="flex justify-between items-center">
        <h2 className="text-block">
          Top Gainers
        </h2>
        <div>
          <CarouselPrevious/>
          <CarouselNext/>
        </div>
      </div>
      <CarouselContent>
        {
          data.map((token: MarketTokenItem) => (
            <CarouselItem key={token.id}>
              <Card className={"w-60"}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-section">
                      {token.name}
                    </h3>
                    <p className="text-block">
                      {token.symbol}
                    </p>
                  </div>
                  <div>
                    <p className="text-block">
                      {token.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}

export default TopMoversTokens;
