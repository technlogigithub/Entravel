import { IconEthereum } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconInfoCircleFilled } from "@tabler/icons-react";
import RecentTransactions from "./RecentTransactions";
import {
  IconArrowBackUp,
  IconArrowBarUp,
  IconArrowNarrowUp,
  IconGift,
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
    date: "10 Apr",
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
    date: "12 May",
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

type Transaction = {
  label: string;
  amount: string;
  status: string;
  date: string;
  icon: any;
  statusColor?: string;
  pendingStatus?: boolean;
  amountStatusColor?: string;
};

// Group transactions by date
const groupTransactionsByDate = (transactions: Transaction[]): { [key: string]: Transaction[] } => {
  return transactions.reduce<{ [key: string]: Transaction[] }>((acc, transaction) => {
    const { date } = transaction;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(transaction);
    return acc;
  }, {});
};

const AccountBookingHistoryDetails = ({onBackClick}: {onBackClick: () => void}) => {
  const groupedTransactions = groupTransactionsByDate(recentTransitionLists);
  return (
    <div>
      <Button
        variant="link"
        className="!p-0 !h-auto text-black-secondary hover:text-blue gap-2"
        size="lg"
        onClick={onBackClick}
      >
        <IconArrowLeft /> Back
      </Button>
      <div className="mt-4 md:mt-10">
        <div className="text-lg md:text-2xl font-medium flex gap-4 items-center text-black mb-4 md:mb-7">
          <IconEthereum className="size-5 md:size-7" />
          Ethereum
        </div>
        <div className="px-4 sm:px-8 py-5 sm:py-7 bg-white border border-input rounded sm:flex sm:gap-4 justify-between mb-8 max-sm:w-full items-end">
            <div>
              <h6 className="text-xs font-semibold flex gap-2 items-center text-textExtraLight">
                Available Balance <IconInfoCircleFilled className="size-4" />
              </h6>
              <h2 className="text-[28px] sm:text-3xl font-medium py-2">12,268.00 USDT</h2>
              <p className="text-xl font-medium text-textExtraLight">$12,268</p>
            </div>
            <Button size="lg" className="!px-6 rounded-xl max-sm:w-full max-sm:mt-8 max-sm:h-12 max-sm:text-base"> Withdraw</Button>
          </div>
      </div>

      <div className="mt-8">
        <h2 className="text-base font-medium pb-4">Transactions</h2>
        <div className="px-4 sm:px-8 py-5 sm:py-7 bg-white border border-input rounded">
           {/* Loop through the grouped transactions */}
           {Object.keys(groupedTransactions).map((date) => (
            <div className="mb-9" key={date}>
              <p className="text-sm font-medium text-textExtraLight border-b border-input pb-3 mb-6">
                {date}
              </p>
              <RecentTransactions isDate={false} recentLists={groupedTransactions[date]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountBookingHistoryDetails;
