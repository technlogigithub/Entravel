import {  IconChevronRight } from "@tabler/icons-react";
import { IconAvalance, IconBNBChain, IconEthereum, IconPolygon } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import WithdrawDialog from "./WithdrawDialog";
import { useState } from "react";

const usdcList = [
  {
    id: 1,
    icon:<IconEthereum/>,
    label: "Ethereum",
    unit:0.00,
    amount:0,
    isDisable:true
  },
  {
    id: 2,
    icon:<IconBNBChain/>,
    label: "BNB Chain",
    unit:0.00,
    amount:0,
    isDisable:false
  },
  {
    id: 3,
    icon:<IconPolygon/>,
    label: "Polygon",
    unit:0.00,
    amount:0,
    isDisable:true
  },
  {
    id: 4,
    icon:<IconAvalance/>,
    label: "Avalanche",
    unit:0.00,
    amount:0,
    isDisable:false
  }
]
const UsdcListTab = () => {
  const [isUSDCOpen, setIsUSDCOpen] = useState(false)
  const handleUsdcOpen = () => {
    setIsUSDCOpen(true)
  }

  return (
    <>
       {usdcList.map((item) => (
              <div className="border border-gray p-6 " key={item.id}>
              <div className="flex justify-between gap-4 items-start">
                  <div className="text-base font-medium flex gap-2 items-center text-black">
                    {item.icon}{item.label}  
                  </div>
                  <div className="text-right">
                      <p className="text-sm sm:text-base font-semibold text-black">{item.unit} USDC</p>
                      <p className="text-black-secondary font-normal text-sm">$ {item.amount}</p>
                  </div>
              </div>
              <div className="flex justify-between mt-5">
                  <Button className="rounded-xl !px-6" disabled={item.isDisable} onClick={handleUsdcOpen}>Withdraw</Button>
                  <Button variant="link" className="!p-0 !h-auto text-black"><IconChevronRight className="size-6"/></Button>
              </div>
          </div>
        ))}

        {isUSDCOpen && (
          <WithdrawDialog open={isUSDCOpen} setOpen={setIsUSDCOpen}/>
        )}
    </>
  )
}

export default UsdcListTab