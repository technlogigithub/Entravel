import { IconEthereum, IconTRON } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconChevronLeft, IconChevronRight, IconPolygon } from "@tabler/icons-react";
import { useState } from "react";

const paymentHistory = [
  {
    date: "17/07/2023, 12:23",
    referee: "Direct",
    icon:<IconEthereum />,
    network: "Ethereum",
    amount: "20.00 USDT",
  },
  {
    date: "17/07/2023, 12:23",
    referee: "Direct",
    icon:<IconPolygon />,
    network: "Polygon",
    amount: "20.00 USDT",
  },
  {
    date: "17/07/2023, 12:23",
    referee: "Direct",
    icon:<IconTRON />,
    network: "Tron",
    amount: "20.00 USDT",
  },
  {
    date: "17/07/2023, 12:23",
    referee: "Direct",
    icon:<IconPolygon />,
    network: "Polygon",
    amount: "20.00 USDT",
  },
  {
    date: "17/07/2023, 12:23",
    referee: "Direct",
    icon:<IconTRON />,
    network: "Tron",
    amount: "20.00 USDT",
  },
];
const CommisonPaymentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(paymentHistory.length / itemsPerPage);
  const currentPaymentHistory = paymentHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination control handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-lg font-medium pb-6">Commission payment history</h3>
      <div className="bg-white rounded-lg border border-input">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date/Time</TableHead>
              <TableHead>Referee Level</TableHead>
              <TableHead>Network</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPaymentHistory.map((item) => (
              <TableRow key={item.date}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.referee}</TableCell>
                <TableCell className="flex gap-2 items-center">{item.icon}{item.network}</TableCell>
                <TableCell className="text-right">
                  {item.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination Controls */}
        <div className="flex justify-end items-center py-4  border-t border-[#e5e7eb]">
          <Button
            variant="link"
            className={`px-4 py-2 rounded ${
              currentPage === 1 ? "text-gray-500" : "text-black"
            }`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <IconChevronLeft className="size-4"/>
          </Button>
          <span className="text-base font-medium">
            {currentPage} of <span className="font-normal">{totalPages}</span>
          </span>
          <Button
            variant="link"
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ?"text-gray-500" : "text-black"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <IconChevronRight className="size-4"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommisonPaymentHistory;
