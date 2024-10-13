import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
const popularFiltersList = [
  {
    label: "Popular filters",
  },
  {
    label: "Very Good Rating",
  },
  {
    label: "Beach nearby",
  },
  {
    label: "Hide sold out",
  }
];
const PapularFilter = () => {
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Function to handle toggling the visibility of filters
  const handleToggleFilters = () => {
    setShowAllFilters((prev) => !prev);
  };
  return (
    <>
      <Label className="text-base font-semibold mb-5 text-black">
        Popular filters
      </Label>
      <div className="flex flex-col gap-5">
        {(showAllFilters
          ? popularFiltersList
          : popularFiltersList.slice(0, 5)
        ).map((filter) => (
          <div key={filter.label} className="flex items-center space-x-3">
            <Checkbox id={filter.label} />
            <Label
              htmlFor={filter.label}
              className="text-sm font-normal leading-none cursor-pointer m-0 text-black"
            >
              {filter.label}
            </Label>
          </div>
        ))}
      </div>
      {popularFiltersList.length > 5 && (
        <Button
          variant="link"
          onClick={handleToggleFilters}
          className="mt-3 p-0"
        >
          {showAllFilters ? (
            <>
              Show Less <IconChevronUp className="ml-2 size-4" />
            </>
          ) : (
            <>
              Show more <IconChevronDown className="ml-2 size-4" />
            </>
          )}
        </Button>
      )}
    </>
  );
};

export default PapularFilter;
