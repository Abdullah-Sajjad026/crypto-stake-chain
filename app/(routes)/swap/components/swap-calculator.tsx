import {Card} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import InputWithSelect from "@/components/ui/input-with-select";
import Image from "next/image";
import ASSETS from "@/app/assets";
import {SelectOption} from "@/components/ui/select";

const SwapCalculator = ({
                          coin1, coin2, setCoin1, setCoin2,
                          coinsOptions
                        }: {
  coin1: string,
  coin2: string,
  setCoin1: (value: SelectOption) => void,
  setCoin2: (value: SelectOption) => void,
  coinsOptions: SelectOption[]
}) => {


  return (
    <Card>
      <Tabs defaultValue="swap">
        <TabsList>
          <TabsTrigger value="swap">Swap</TabsTrigger>
          <TabsTrigger value="limit">Limit</TabsTrigger>
        </TabsList>
        <TabsContent value="swap" className="mt-4">
          <div>
            <InputWithSelect
              selectOptions={coinsOptions}
              selectProps={{
                value: coin1,
                onValueChange: (value: string) => {
                  console.log(value);
                  setCoin1(coinsOptions.find(option => option.value === value)!)
                }
              }}
              inputProps={{
                placeholder: "0.0"
              }}
              label="Your Sell"/>
            <div className="flex justify-between text-muted-foreground text-sm mt-2">
              <span>
                1 ETH ≈ $3,418.00 USDT
              </span>

              <span>$3,428.25</span>
            </div>
          </div>
          <div className="my-4 flex justify-center">
            <Image src={ASSETS.icons.swapArrows} alt="Swap Arrows" className={"h-8 w-8"}/>
          </div>

          <div className={"mt-4"}>
            <InputWithSelect
              selectOptions={coinsOptions}
              selectProps={{
                value: coin2,
                onValueChange: (value: string) => {
                  console.log(value);
                  setCoin2(coinsOptions.find(option => option.value === value)!)
                }
              }}
              inputProps={{
                placeholder: "0.0"
              }}
              label="Your Buy"/>
            <div className="flex justify-between text-muted-foreground text-sm mt-2">
              <span>
                1 ETH ≈ $3,418.00 USDT
              </span>

              <span>$3,428.25</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="limit">

          <div>
            <InputWithSelect
              selectOptions={coinsOptions}
              selectProps={{
                defaultValue: "eth"
              }}
              inputProps={{
                placeholder: "0.0"
              }}
              label="Your Sell"/>
            <div className="flex justify-between text-muted-foreground text-sm mt-2">
              <span>
                1 ETH ≈ $3,418.00 USDT
              </span>

              <span>$3,428.25</span>
            </div>
          </div>
          <div className="my-4 flex- justify-center">
            <Image src={ASSETS.icons.swapArrows} alt="Swap Arrows" className={"h-8 w-8"}/>
          </div>

          <div className={"mt-4"}>
            <InputWithSelect
              selectOptions={coinsOptions}
              selectProps={{
                defaultValue: "eth"
              }}
              inputProps={{
                placeholder: "0.0"
              }}
              label="Your Buy"/>
            <div className="flex justify-between text-muted-foreground text-sm mt-2">
              <span>
                1 ETH ≈ $3,418.00 USDT
              </span>

              <span>$3,428.25</span>
            </div>
          </div>

          <div className="mt-4">

          </div>
        </TabsContent>
      </Tabs>

      <Button className="w-full mt-8 rounded-full">Connect Wallet</Button>
      <p className="text-muted-foreground text-center mx-auto mt-4">
        By using the site and creating an exchange, you agree to the Fixed 100K Stake&apos;s Terms of Services and
        Privacy
        Policy
      </p>

    </Card>
  )
}

export default SwapCalculator;
