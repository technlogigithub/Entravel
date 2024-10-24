import { Separator } from "@/components/ui/separator";
import AssetBalance from "./AssetBalance";
import { Button } from "@/components/ui/button";
import RecentTransactions from "./RecentTransactions";
import { useState } from "react";
import AccountBookingHistoryDetails from "./AccountBookingHistoryDetails";
import {
  IconArrowBackUp,
  IconArrowBarUp,
  IconArrowNarrowUp,
  IconGift,
  IconChevronRight, IconInfoCircleFilled
} from "@tabler/icons-react";

const recentTransitionLists = [
  {
    label: "Refund for booking",
    amount: "2,448.67 USDT",
    status: "Pending",
    date: "12 Apr",
    icon: IconArrowBackUp,
    statusColor: "#fb923c",
    pendingStatus: true,
  },
  {
    label: "Booking a hotel",
    amount: "-2,448.67 USDT",
    status: "TxID 0xf4e36222150f2dsfdsgdg",
    date: "12 Apr",
    icon: IconArrowNarrowUp,
    amountStatusColor: "#dc2626",
  },
  {
    label: "Withdrawn funds",
    amount: "120.00 USDT",
    status: "TxID 0xf4e36222150f2dsfdsgdg",
    date: "12 Apr",
    icon: IconArrowBarUp,
    amountStatusColor: "#000000",
  },
  {
    label: "Affiliate commission",
    amount: "1,234.45 USDT",
    status: "TxID 0xf4e36222150f2dsfdsgdg",
    date: "12 Apr",
    icon: IconGift,
    amountStatusColor: "#009962",
  },
  {
    label: "Refund for booking",
    amount: "1,234.45 USDT",
    status: "TxID 0xf4e36222150f2dsfdsgdg",
    date: "12 Apr",
    icon: IconArrowBackUp,
    amountStatusColor: "#009962",
  },
];
const WalletBalance = () => {
  const [showAccountHistory, setShowAccountHistory] = useState(false);
  return (
    <>
      {showAccountHistory ? (
        <div className="mt-8">
          <AccountBookingHistoryDetails onBackClick={() => setShowAccountHistory(false)}/>
        </div>
      ) : (
        <div className="max-xlg:mt-6">
          <h2 className="text-lg sm:text-2xl font-medium mb-4 sm:mb-6">
            Wallet balance
          </h2>
          <div className="px-4 sm:px-8 py-5 sm:py-7 bg-white border border-input rounded sm:flex sm:gap-4 justify-between mb-8 max-sm:w-full">
            <div className="flex flex-col gap-1">
              <h6 className="text-xs font-semibold flex gap-2 items-center text-textExtraLight">
                Available Balance <IconInfoCircleFilled className="size-4" />
              </h6>
              <h2 className="text-[28px] sm:text-[32px] font-medium">$0.00</h2>
            </div>
            <Separator className="w-full bg-input my-6 sm:hidden" />
            <div className="flex items-center gap-2">
              <Separator className="mx-8 h-12 w-[1px] bg-input my-0 max-sm:hidden" />
              <div>
                <h6 className="text-xs font-semibold flex gap-2 items-center text-textExtraLight">
                  Available Balance <IconInfoCircleFilled className="size-4" />
                </h6>
                <h2 className="text-[28px] sm:text-[32px] font-medium">
                  $0.00
                </h2>
              </div>
            </div>
          </div>

          <div className="text-black">
            <h3 className="text-base font-medium">Asset Balances</h3>
            <div className="mt-3">
              <AssetBalance />
            </div>
          </div>

          <div className="text-black mt-8">
            <div className="flex justify-between gap-4 items-center">
              <h3 className="text-base font-medium">Recent transactions</h3>
              <Button
                variant="link"
                className="!p-0 !h-auto gap-2"
                onClick={() => setShowAccountHistory(true)}
              >
                View all <IconChevronRight className="size-5" />
              </Button>
            </div>
            <div className="mt-5 bg-white border border-gray rounded p-4 sm:p-7">
              <RecentTransactions recentLists={recentTransitionLists}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WalletBalance;
