import React from "react";
import Select from "react-select";

const AutoSelect = ({
  label,
  labelClass,
  placeholder,
  defaultValue,
  options,
  className
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {label && (
          <label
            className={`text-xs font-semibold text-gray-light ${labelClass}`}
          >
            {label}
          </label>
        )}
        <Select
          defaultValue={defaultValue}
          options={options}
          placeholder={placeholder}
          className={className}
        />
      </div>
    </>
  );
};

export default AutoSelect;
