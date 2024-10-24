import { Button } from "@/components/ui/button";
import { IconClockHour3Filled, IconCopy } from "@tabler/icons-react";
import { FC } from "react";

interface RecentTransactionsProps {
  isDate?: boolean;
  recentLists: {
    label: string;
    amount: string;
    status: string;
    date: string;
    icon: any;
    statusColor?: string;
    amountStatusColor?: string;
    pendingStatus?: boolean;
  }[];
}
const RecentTransactions: FC<RecentTransactionsProps> = ({
  isDate = true,
  recentLists,
}) => {
  return (
    <>
      {recentLists.map((item, index) => (
        <div
          className="flex justify-between items-center gap-2 sm:gap-4 mb-6 sm:mb-8 last:mb-0"
          key={index}
        >
          <div className="flex gap-2 sm:gap-5">
            <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-gray flex items-center justify-center relative">
              <item.icon className="size-4 sm:size-5" />
              {item.pendingStatus && (
                <span className="absolute -bottom-0.5 -right-1 border border-white rounded-full">
                  <IconClockHour3Filled className="size-4 text-orangeLight" />
                </span>
              )}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-medium pb-1 text-black">
                {item.label}
              </h3>
              <p className="text-sm font-normal text-textExtraLight flex gap-1 sm:gap-3 items-center">
                {!isDate && item.amountStatusColor === "#009962" ? (
                  <Button
                    variant="link"
                    className="!p-0 !h-auto gap-1 text-black hover:text-blue"
                  >
                    <span
                      className="max-w-16 sm:max-w-28 overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{ color: item.statusColor }}
                    >
                      {item.status}
                    </span>
                    <IconCopy className="size-4" />
                  </Button>
                ) : (
                  <span
                    className="max-w-16 sm:max-w-28 overflow-hidden text-ellipsis whitespace-nowrap"
                    style={{ color: item.statusColor }}
                  >
                    {item.status}
                  </span>
                )}

                {isDate && (
                  <>
                    <span className="min-w-1 inline-flex w-1 h-1 rounded-full bg-gray-500"></span>{" "}
                    {item.date}
                  </>
                )}
              </p>
            </div>
          </div>

          <div
            className="text-sm sm:text-base font-semibold text-textExtraLight text-right"
            style={{ color: item.amountStatusColor }}
          >
            {item.amount}
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentTransactions;
