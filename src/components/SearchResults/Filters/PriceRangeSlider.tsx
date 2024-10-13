import { Label } from "@/components/ui/label";
import React, { useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  step?: number;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  step = 1,
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  // Handler for changing the min value
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(Number(e.target.value), maxValue - step); // Ensure minValue stays below maxValue
    setMinValue(newValue);
  };

  // Handler for changing the max value
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(Number(e.target.value), minValue + step); // Ensure maxValue stays above minValue
    setMaxValue(newValue);
  };

  return (
    <div className="w-full">
      {/* Label */}
      <Label className="text-base font-semibold mb-5 text-black">
        Price per night
      </Label>

      {/* Slider container */}
      <div className="relative w-full h-0.5 bg-gray-200 rounded-lg mb-4">
        {/* Range fill between min and max */}
        <div
          className="absolute h-0.5 bg-black rounded-lg"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        />

        {/* Min slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-0.5 bg-transparent appearance-none pointer-events-auto z-10"
          style={{ zIndex: minValue === maxValue ? 2 : 3 }} // Ensure min slider is on top if they overlap
        />

        {/* Max slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-0.5 bg-transparent appearance-none pointer-events-auto z-9"
          style={{ zIndex: maxValue === minValue ? 3 : 2 }} // Ensure max slider is on top if they overlap
        />
      </div>

      {/* Input fields */}
      <div className="flex justify-between mt-6 gap-8">
        <div className="flex flex-col w-full">
          <Label className="font-medium">MIN</Label>
          <div className="flex items-center w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50  h-12 text-primary justify-between font-medium">
            <span className="text-gray-500">$</span>
            <input
              type="text"
              min={min}
              max={maxValue - 1}
              value={minValue}
              onChange={handleMinChange}
              className="w-16 p-1 text-right outline-none border-none focus:ring-0"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Label className="font-medium">MAX</Label>
          <div className="flex items-center w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50  h-12 text-primary justify-between font-medium">
            <span className="text-gray-500">$</span>
            <input
              type="text"
              min={minValue + 1}
              max={max}
              value={maxValue}
              onChange={handleMaxChange}
              className="w-16 p-1 text-center outline-none border-none focus:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
