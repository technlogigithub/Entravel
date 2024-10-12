import React, { useState } from 'react';

interface PriceRangeSliderProps {
  min: number;
  max: number;
  step?: number;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, step = 1 }) => {
  const [value, setValue] = useState<number[]>([min, max]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = Number(e.target.value);
    setValue((prev) => {
      const newValues = [...prev];
      newValues[index] = newValue;
      return newValues;
    });
  };

  return (
    <div className="w-full">
      <label className="block text-lg font-medium mb-2">Price per night</label>
      
      {/* Slider */}
      <div className="flex items-center justify-between">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={(e) => handleSliderChange(e, 0)}
          className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={(e) => handleSliderChange(e, 1)}
          className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Input Fields */}
      <div className="flex justify-between mt-4">
        <div>
          <label className="text-sm">MIN</label>
          <div className="flex items-center space-x-2">
            <span>$</span>
            <input
              type="number"
              value={value[0]}
              onChange={(e) => handleSliderChange(e as React.ChangeEvent<HTMLInputElement>, 0)}
              className="w-20 p-1 border rounded"
            />
          </div>
        </div>
        <div>
          <label className="text-sm">MAX</label>
          <div className="flex items-center space-x-2">
            <span>$</span>
            <input
              type="number"
              value={value[1]}
              onChange={(e) => handleSliderChange(e as React.ChangeEvent<HTMLInputElement>, 1)}
              className="w-20 p-1 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
