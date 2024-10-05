import { useState } from "react";
import { Button } from "../ui/button";

const destinationOptions = [
  {
    name: "Amsterdam, Netherlands",
  },
  {
    name: "Amsterdam Centraal, Stationsplein, Amsterdam",
  },
];
const Location = () => {
  const [locationSearch, setLocationSearch] = useState(
    "Amsterdam, Netherlands"
  );
  const [isDropdown, setIsDropdown] = useState(false);

  const handleInputClick = () => {
    setIsDropdown(true); // Open dropdown on input click
  };

  const handleOptionClick = (location) => {
    setLocationSearch(location); // Set clicked option to input value
    setIsDropdown(false); // Close the dropdown
  };
  return (
    <>
      <div className="relative">
        {/* <Input
          label="Location"
          type="text"
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
          onClick={handleInputClick}
          labelClass="uppercase"
        /> */}
        {isDropdown && (
          <div className="absolute left-6 -bottom-[26px] z-10 size-0 border-x-[10px] border-b-[10px] border-transparent border-b-white"></div>
        )}
      </div>
      {isDropdown && (
        <div className="p-5 bg-white shadow-sm absolute top-[106px] left-10 rounded-md w-[500px]">
          <h6 className="uppercase text-gray-extra-light">Destinations</h6>
          <ul>
            {destinationOptions.map((item) => (
              <li key={item.name}>
                <Button
                  variant="link"
                  onClick={() => handleOptionClick("Amsterdam, Netherlands")}
                >
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Location;
