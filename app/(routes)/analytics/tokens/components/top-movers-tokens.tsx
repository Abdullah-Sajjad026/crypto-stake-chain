import {MarketTokenItem} from "@/app/(routes)/analytics/tokens/components/top-tokens/top-tokens-table/columns";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const TopMoversTokens = ({data}: {
  data: MarketTokenItem[]
}) => {
  return (
    <Carousel className="container px-0">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-block">
          Top Gainers
        </h2>
        {/*<div>*/}
        {/*  <CarouselPrevious/>*/}
        {/*  <CarouselNext/>*/}
        {/*</div>*/}
      </div>
      <CarouselContent>
        {
          data.map((token: MarketTokenItem) => (
            <CarouselItem key={token.id} className={"basis-auto"}>
              <Card className={"w-60"}>
                <Link href={`/analytics/tokens/${token.id}`}>
                  <div className="flex flex-col gap-2">
                    <Image src={token.image} alt={token.name} width={30} height={30}/>
                    <div>

                      <p className="text-sm mb-1 text-muted-foreground">
                        Token
                      </p>
                      <p className="font-bold">
                        {token.name}
                      </p>
                    </div>
                    <div className="flex justify-between items-center font-bold">
                      <p>
                        ${token.current_price}
                      </p>
                      <p className={`text-${token.price_change_percentage_24h > 0 ? "green-500" : "red-500"}`}>
                        {token.price_change_percentage_24h}%
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}

export default TopMoversTokens;
