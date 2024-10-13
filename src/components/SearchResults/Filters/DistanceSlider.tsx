import { Label } from "@/components/ui/label";
import { useState } from "react";

const DistanceSlider = () => {
  const [distance, setDistance] = useState(20); // Default value

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(parseInt(e.target.value, 10));
  };

  return (
    <div className="my-8">
      <Label className="text-base font-semibold mb-5 text-black">
        Distance from city center
      </Label>

      {/* Slider */}

      <div className="flex items-center gap-2 mb-3">
        <input
          type="range"
          min="0"
          max="100"
          value={distance}
          onChange={handleSliderChange}
          className="w-full h-0.5 bg-gray-300 rounded-lg cursor-pointer"
        />
      </div>

      {/* Display distance in km */}
      <div className="flex items-center w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50  h-12 text-primary justify-between font-medium">
        <span className="text-gray-500">km</span>
        <input
          type="text"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value))}
          className="w-16 p-1 text-right outline-none border-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default DistanceSlider;
