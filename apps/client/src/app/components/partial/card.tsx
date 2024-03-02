import React from "react";

type Props = {
  children: React.ReactNode;
  rounded?: boolean;
  shadow?: boolean;
  padding?: boolean;
  className?: string;
  border?: boolean;
  style?: React.CSSProperties;
};

const Card = ({
  children,
  rounded = true,
  shadow = true,
  padding = true,
  border = false,
  className,
  style,
}: Props) => {
  const classNames = `bg-white ${rounded ? "rounded-md" : ""} ${
    shadow ? "shadow-sm " : ""
  } ${padding ? "p-4 " : ""} ${border ? "border border-border_light" : ""} ${
    className || ""
  } `;
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Card;
