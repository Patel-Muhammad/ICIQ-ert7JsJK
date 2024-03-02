import React from "react";
import { useLocation } from "react-router-dom";
import { TOPBAR_BG_TRANSPARENT_PAGES } from "../../utils/component-manager";

type Props = {};

const Topbar = (props: Props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={`relative flex justify-between items-center py-3 w-full h-[80px] z-10`}
    >
      <div></div>
      <div
        className={`flex gap-4 h-full items-center ${
          TOPBAR_BG_TRANSPARENT_PAGES.includes(pathname)
            ? "text-main_bg"
            : "text-text_high"
        }`}
      >
        <div className="relative p-2">
          <div className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-primary flex items-center justify-center text-[white] rounded-full">
            6
          </div>
        </div>
        <div className="w-[1px] h-[40px] bg-border_light"></div>
        <div className="flex gap-3 items-center">
          <div className="rounded-full h-[32px] w-[32px] bg-gray-200"></div>
          <div>
            <h6 className="text-sm">Anand D</h6>
            <p className="text-xs">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
