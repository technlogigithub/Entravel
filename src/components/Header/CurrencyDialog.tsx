import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { IconCheck, IconCurrencyDollar } from "@tabler/icons-react";
import { useState } from "react";

interface Currency {
    id:number,
  name: string;
  iconName: string;
  active?: boolean;
}

const initialCurrencies: Currency[] = [
    {
        id:1,
      iconName: "EUR",
      name: "Euro - €",
      active: false
    },
    {
        id:2,
      iconName: "USD",
      name: "American Dollar - $",
      active: false
    },
    {
        id:3,
      iconName: "PSD",
      name: "Pounds sterling - £",
      active: false
    },
    {
        id:4,
      iconName: "USD",
      name: "U.S. Dollar - $",
      active: false
    },
    {
        id:5,
      iconName: "JYP",
      name: "Pounds sterling - £",
      active: false
    },
    {
        id:6,
      iconName: "JYP",
      name: "Japanese yen - ¥",
      active: false
    },
    {
        id:7,
      iconName: "PSD",
      name: "Pounds sterling - £",
      active: false
    },
    {
        id:8,
      iconName: "JYP",
      name: "Japanese yen - ¥",
      active: false
    },
    {
        id:9,
      iconName: "JYP",
      name: "Japanese yen - ¥",
      active: false
    },
    {
        id:10,
      iconName: "JYP",
      name: "Japanese yen - ¥",
      active: false
    },
    {
        id:11,
      iconName: "JYP",
      name: "Japanese yen - ¥",
      active: false
    },
    {
        id:12,
      iconName: "USD",
      name: "American Dollar - $",
      active: false
    },
  ];

const CurrencyDialog = () => {
  const [currencies, setCurrencies] = useState(initialCurrencies);

  const handleCurrencyClick = (id: number) => {
    setCurrencies((prevCurrencies) =>
      prevCurrencies.map((currency) =>
        currency.id === id
          ? { ...currency, active: true } // Set clicked currency to active
          : { ...currency, active: false } // Set all others to inactive
      )
    );
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="gap-2.5 text-black px-0">
            <IconCurrencyDollar className="size-4" />
            USD
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1000px]">
          <DialogHeader>
            <DialogTitle>All currencies</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2 mt-8">
            <ul className="flex flex-wrap gap-0">
              {currencies.map((currency: Currency) => (
                <li
                  key={currency.name}
                  className="basis-1/3 pr-3 last:pr-0 pb-4 last:pb-0"
                >
                  <Button
                    variant="link"
                    className={cn(
                      "group gap-5 text-sm pr-4 pl-3 py-2 h-11 w-full justify-between rounded-xl min-w-72",
                      currency.active
                        ? "bg-black text-white hover:text-white hover:bg-blue"
                        : "bg-transparent text-black hover:bg-black hover:text-white"
                    )}
                    onClick={() => handleCurrencyClick(currency.id)} // Toggle active state on click
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "py-0.5 px-2.5 rounded-full",
                          !currency.active &&
                            "bg-gray-light group-hover:bg-transparent"
                        )}
                      >
                        {currency.iconName}
                      </div>
                      {currency.name}
                    </div>
                    {currency.active && (
                      <IconCheck className="size-6 text-white" />
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CurrencyDialog;
