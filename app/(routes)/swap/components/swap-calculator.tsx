import {Card} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const SwapCalculator = () => {
  return (
    <Card>
      <Tabs defaultValue="swap">
        <TabsList>
          <TabsTrigger value="swap">Swap</TabsTrigger>
          <TabsTrigger value="limit">Limit</TabsTrigger>
        </TabsList>
        <TabsContent value="swap" className={"mt-4"}>
          <div>
            <Label htmlFor="sell">
              Your Sell
            </Label>
            <div className="flex items-center justify-between my-2">
              <Input className="flex-grow" type="number" id="sell"/>
              <Select>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">
                    {/*  Icon with text */}

                  </SelectItem>
                </SelectContent>
              </Select>

            </div>
          </div>
        </TabsContent>
        <TabsContent value="limit">

        </TabsContent>
      </Tabs>

      <Button className="w-full mt-12 rounded-full">Connect Wallet</Button>
      <p className="text-muted-foreground text-center mx-auto mt-4">
        By using the site and creating an exchange, you agree to the Fixed 100K Stake&apos;s Terms of Services and
        Privacy
        Policy
      </p>

    </Card>
  )
}

export default SwapCalculator;
