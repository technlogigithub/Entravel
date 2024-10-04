import React from "react";

const Button = ({
  label,
  icon,
  variant = "primary",
  onClick = () => {},
  alt,
  className,
  iconClassName,
  position = "start",
  children
}) => {
  const getButtonClasses = () => {
    switch (variant) {
      case "link":
        return "text-black hover:text-primary/50";
      default:
        return "bg-black text-white hover:bg-black/80 hover:text-white group-hover:opacity-50 rounded-xl min-w-[181px] justify-center"; // Primary button color
    }
  };

  const buttonClasses = `${getButtonClasses()} text-sm font-medium  flex items-center group`;
  const size = "2xl:h-6 2xl:w-6";
  const smallDesktopSize = "sm:h-5 sm:w-5";
  const mobileSize = "h-4 w-4";
  return (
    <button onClick={onClick} className={`${buttonClasses} ${className}`}>
      {icon && position === "start" && <div className="mr-2 group-hover:opacity-50">{icon}</div>}
      {label && label}
      {children}
      {/* {(icon && position === "end") && (
       <span className={`ml-2 ${iconClassName}`}>
         <img src={icon} alt={alt} className={`${mobileSize} ${smallDesktopSize} ${size}`} />
       </span>
     )} */}
    </button>
  );
};

export default Button;
