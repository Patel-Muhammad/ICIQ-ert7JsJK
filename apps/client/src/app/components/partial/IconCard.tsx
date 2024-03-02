import React from "react";

type Props = {
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
};

const IconCard = ({ icon, className, style, backgroundColor }: Props) => {
  const defaultBackgroundColor = "bg-333";
  const cardSize = "w-150 h-150";

  const classNames = `${cardSize} ${backgroundColor || defaultBackgroundColor} rounded-md shadow-sm p-4 ${className || ""}`;

  return (
    <div className="w-32 h-32 sm:p-6 bg-F8F8FB border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700 flex items-center justify-center ">
    <div>
        {icon}
    </div>
  </div>
  
  );
};

export default IconCard;
