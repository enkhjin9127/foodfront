import React from "react";
import Logo from "./icons/logo";
import { MapPin, ChevronRight, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <div className="h-[68px] w-full bg-black flex justify-between px-[88px] items-center">
      <div className="flex">
        <Logo />
        <div>
          <div>
            <span className="text-white">Nom</span>
            <span className="text-red-400">Nom</span>
          </div>
          <div className="text-white">Swift Delivery</div>
        </div>
      </div>
      <div className="flex">
        <div className="flex bg-white rounded-full items-center justify-center">
          <MapPin className="text-red-500" />
          <div className="text-red-500 text-[12px] ">Delivery Address:</div>
          <div className="text-[#71717A] text-[12px]">Add Location</div>
          <ChevronRight className="text-[#71717A]" />
        </div>
        <div className="rounded-full bg-white w-9 h-9 flex items-center justify-center mx-3">
          <ShoppingCart className="w-4 h-4" />
        </div>
        <div className="rounded-full bg-red-500 w-9 h-9 flex items-center justify-center">
          <User className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
