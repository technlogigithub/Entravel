import {
  IconEthereum,
  IconOptimism,
  IconPolygon,
} from "@/components/iocns/Icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const upcomingCommsionPayments = [
  {
    amount: "20.00 USDT",
    icon: <IconEthereum />,
    label: "Ethereum",
    date: "Payout on Sep 25",
    url: "./etherium.png",
    altTag: "etherium",
  },
  {
    amount: "USDC 20.00 ",
    icon: <IconOptimism />,
    label: "Optimism",
    date: "Payout on Oct 25",
    url: "./Optimism.png",
    altTag: "Optimism",
  },
  {
    amount: "USDT 20.00",
    icon: <IconPolygon />,
    label: "Polygon",
    date: "Payout on Nov 25",
    url: "./etherium.png",
    altTag: "etherium",
  },
  {
    amount: "20.00 USDT",
    icon: <IconEthereum />,
    label: "Ethereum",
    date: "Payout on Sep 25",
    url: "./etherium.png",
    altTag: "etherium",
  },
  {
    amount: "USDC 20.00 ",
    icon: <IconOptimism />,
    label: "Optimism",
    date: "Payout on Oct 25",
    url: "./Optimism.png",
    altTag: "Optimism",
  },
  {
    amount: "USDT 20.00",
    icon: <IconPolygon />,
    label: "Polygon",
    date: "Payout on Nov 25",
    url: "./etherium.png",
    altTag: "etherium",
  },
];

const UpcomingCommsionsList = ({items}: {items: any[]}) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          className="p-6 bg-white rounded-lg border border-input relative bg-payment-bg bg-contain bg-right bg-no-repeat flex justify-between items-center gap-4 shadow-six"
          key={index}
        >
          <div>
            <Badge
              variant="outline"
              className="uppercase text-xs font-medium py-1 px-3 text-black border-black"
            >
              Get Commission
            </Badge>
            <h3 className="text-2xl font-medium pt-7">{item.amount}</h3>
            <div className="flex gap-3 text-sm font-medium mt-3 mb-7">
              {item.icon}
              {item.label}
            </div>
            <p className="text-black-secondary font-medium text-base">
              {item.date}
            </p>
          </div>
          <div>
            <img src={item.url} alt={item.altTag} className="w-28" />
          </div>
        </div>
      ))}
    </>
  );
};
const UpcomingCommsions = () => {
  const [isMorePayments, setIsMorePayments] = useState(false);
  const handleOpenMorepaymentDialog = () => {
    setIsMorePayments(true);
  }

  const threeItemShow = upcomingCommsionPayments.slice(0, 3);
  return (
    <>
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6 flex-wrap">
        <h3 className="text-2xl font-medium">Upcoming commissions payments</h3>
        <Button variant="link" size="lg" className="gap-2 !p-0 !h-auto" onClick={handleOpenMorepaymentDialog}>
          More Payments
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xlg:grid-cols-3 gap-6 mt-6"><UpcomingCommsionsList items={threeItemShow}/></div>
    </div>

    {isMorePayments && (
      <Dialog open={isMorePayments} onOpenChange={setIsMorePayments}>
      <DialogContent className="max-w-[90%] xlg:max-w-[800px] overflow-y-auto max-h-[90%] max-sm:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"><UpcomingCommsionsList items={upcomingCommsionPayments}/>
      </div>
      </DialogContent>
    </Dialog>
    )}
    </>
  );
};

export default UpcomingCommsions;
