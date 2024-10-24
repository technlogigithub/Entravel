

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import UsdcListTab from "./UsdcListTab";

const AssetBalance = () => {
  return (
    <Tabs defaultValue="usdc">
    <TabsList>
      <TabsTrigger
        value="usdc"
        className="border-b border-input data-[state=active]:border-b-2 data-[state=active]:border-black px-6 py-2"
      >
        USDC
      </TabsTrigger>
      <TabsTrigger
        value="usdt"
        className="border-b border-input data-[state=active]:border-b-2 data-[state=active]:border-black px-6 py-2"
      >
        USDT
      </TabsTrigger>
      <TabsTrigger
        value="creditcard"
        className="border-b border-input data-[state=active]:border-b-2 data-[state=active]:border-black px-6 py-2"
      >
        Credit card
      </TabsTrigger>
    </TabsList>
    <div className="mt-6 bg-white border border-gray rounded p-4 sm:p-6">
    <TabsContent value="usdc">
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><UsdcListTab/></div>
    </TabsContent>
    <TabsContent value="usdt">
      USDT
    </TabsContent>
    <TabsContent value="creditcard">Credit card</TabsContent>
    </div>
  </Tabs>
  )
}

export default AssetBalance