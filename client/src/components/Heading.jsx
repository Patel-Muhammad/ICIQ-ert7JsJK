import React from "react";



const Heading = ({
    type = "h1",
    fontWeight = "normal",
    className,
    style,
    children,
}) => {
    const classNames = ` ${type === "h1"
            ? "text-4xl"
            : type === "h2"
                ? "text-3xl"
                : type === "h3"
                    ? "text-2xl"
                    : type === "h4"
                        ? "text-xl"
                        : type === "h5"
                            ? "text-lg"
                            : "text-base"
        } ${fontWeight === "light"
            ? "font-thin"
            : fontWeight === "normal"
                ? "font-normal"
                : fontWeight === "semi-bold"
                    ? "font-semibold"
                    : "font-bold"
        } ${className || ""}`;
    return (
        <div className={classNames} style={style}>
            {children}
        </div>
    );
};

export default Heading;
