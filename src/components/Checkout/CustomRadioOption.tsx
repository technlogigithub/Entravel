import { FC } from "react";


interface CustomRadioOptionProps {
    value: string;
    selected: string;
    onChange: (value: string) => void;
    icon?: string;
    label: string;
    isIcon?: boolean,
    customIcon?: React.ReactNode
  }

const CustomRadioOption:FC<CustomRadioOptionProps> = ({ value, selected, onChange, icon, label, isIcon=false, customIcon }) => {
  return (
    <label
      className={`flex items-center justify-center p-4 border rounded cursor-pointer w-full ${
        selected === value ? 'border-blue-500' : 'border-gray-300'
      }`}
    >
      <input
        type="radio"
        name="crypto"
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div className="flex items-center space-x-2">
        {isIcon ?(
            <div>{customIcon}</div>
        ) :  <img src={icon} alt={label} className="h-6 w-6" /> }
       
        <span className="font-medium text-black">{label}</span>
      </div>
    </label>
  );
};

export default CustomRadioOption;
