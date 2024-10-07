import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "@radix-ui/react-icons";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";

interface langauge {
  id: number;
  name: string;
  imgUrl: string;
  active?: boolean;
}

const initialCurrencies: langauge[] = [
  {
    id: 1,
    imgUrl: "/icons/us_flag.png",
    name: "English (US)",
    active: true,
  },
  {
    id: 2,
    imgUrl: "/icons/us_flag.png",
    name: "English (US)",
    active: false,
  },
  {
    id: 3,
    imgUrl: "/icons/Estonia_flag.png",
    name: "Estonia",
    active: false,
  },
  {
    id: 4,
    imgUrl: "/icons/eng_flag.png",
    name: "English (UK)",
    active: false,
  },
  {
    id: 5,
    imgUrl: "/icons/eng_flag.png",
    name: "English (UK)",
    active: false,
  },
  {
    id: 6,
    imgUrl: "/icons/us_flag.png",
    name: "English (US)",
    active: false,
  },
  {
    id: 7,
    imgUrl: "/icons/Netherlands_flag.png",
    name: "Netherlands",
    active: false,
  },
  {
    id: 8,
    imgUrl: "/icons/us_flag.png",
    name: "English (US)",
    active: false,
  },
  {
    id: 9,
    imgUrl: "/icons/Netherlands_flag.png",
    name: "Netherlands",
    active: false,
  },
  {
    id: 10,
    imgUrl: "/icons/eng_flag.png",
    name: "English (UK)",
    active: false,
  },
  {
    id: 11,
    imgUrl: "/icons/Netherlands_flag.png",
    name: "Netherlands",
    active: false,
  },
  {
    id: 12,
    imgUrl: "/icons/eng_flag.png",
    name: "English (UK)",
    active: false,
  },
];

const AllLanguagesDialog = () => {
  const [currencies, setCurrencies] = useState(initialCurrencies);

  const handleLangaugeClick = (id: number) => {
    setCurrencies((prevCurrencies) =>
      prevCurrencies.map(
        (langauge) =>
          langauge.id === id
            ? { ...langauge, active: true } // Set clicked langauge to active
            : { ...langauge, active: false } // Set all others to inactive
      )
    );
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="gap-2.5 text-black px-0">
            <GlobeIcon className="w-4 h-4" />
            English
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1000px]">
          <DialogHeader>
            <DialogTitle>All languages</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2 mt-8">
            <ul className="flex flex-wrap gap-0">
              {currencies.map((langauge: langauge) => (
                <li
                  key={langauge.name}
                  className="basis-1/3 pr-3 last:pr-0 pb-4 last:pb-0"
                >
                  <Button
                    variant="link"
                    className={cn(
                      "group gap-5 text-sm pr-4 pl-3 py-2 h-11 w-full justify-between rounded-xl min-w-72",
                      langauge.active
                        ? "bg-black text-white hover:text-white hover:bg-blue"
                        : "bg-transparent text-black hover:bg-black hover:text-white"
                    )}
                    onClick={() => handleLangaugeClick(langauge.id)} // Toggle active state on click
                  >
                    <div className="flex items-center gap-3">
                      <img src={langauge.imgUrl} alt={langauge.name} />
                      {langauge.name}
                    </div>
                    {langauge.active && (
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

export default AllLanguagesDialog;
