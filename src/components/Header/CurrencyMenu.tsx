import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "../ui/button";
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

const CurrencyMenu = ({isMobileMenu = false}: {isMobileMenu: boolean}) => {
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
    <div className={cn("flex items-center space-x-2", isMobileMenu ? "mt-0" :  "mt-8")}>
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
  )
}

export default CurrencyMenu