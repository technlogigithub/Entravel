  import React, { useState } from "react";
  import { AutoSelect, Button, Input, RoomDropdown } from "../shared";
  import { colourOptions } from "../../constants/data";
  import { DateRange } from 'react-date-range';
  import { addDays } from 'date-fns'; // Import addDays from date-fns
  import 'react-date-range/dist/styles.css'; // main css file
  import 'react-date-range/dist/theme/default.css';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Location from "../BookingForm/Location";

  const Banner = () => {
    const [state, setState] = useState([
      {
        startDate: new Date(), // Check-In Date
        endDate: null, // Check-Out Date
        key: 'selection'
      }
    ]);

    const [showCalendar, setShowCalendar] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null); // Track which input is focused (Check-In or Check-Out)

    // Function to toggle the calendar visibility
    const toggleCalendar = (inputType) => {
      setFocusedInput(inputType); // Set which input is clicked
      setShowCalendar(true); // Show calendar
    };

    return (
      <div className="bg-hero-pattern w-full h-[700px] 2xl:h-[912px] bg-center bg-cover bg-no-repeat">
        <div className="pt-20 px-20 flex flex-col justify-center items-center h-full">
          <h1 className="tracking-[-5%] text-primary">
            Travel with{" "}
            <span className="tracking-[-2%] font-extrabold">crypto </span>
          </h1>

          <form>
            <div className="flex bg-white max-w-[1067px] rounded-full py-4 relative px-10">
              <Location/>

              {/* <div className="flex  basis-2/4 gap-8">
                <Input label="Check in" value="Wed, 10 Apr"/>
                <Input label="Check out" value="Wed, 15 Apr"/>
                <div>
                <label className={`text-xs font-semibold text-gray-light uppercase`}>Guests</label>
                <Button>dfdsfdsfd</Button>
                </div>
              </div>
                <Button label="Search" icon={<FontAwesomeIcon icon={faMagnifyingGlass} className="basis-1/4 "/>}/> */}
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Banner;
