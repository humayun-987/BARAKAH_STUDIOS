"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div className="flex items-center space-x-2">
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
          <Link className="cursor-pointer" href="/"> 
            {/* Display name for small screens */}
            <h1 className="text-2xl pl-2 pr-2 font-bold text-gray-300 md:hidden">
              BARAKAH STUDIOS
            </h1>
          </Link>
        </div>

        <div
            className="cursor-pointer hidden 
              md:flex items-center justify-between md:gap-4 lg:gap-20 xl:gap-28
              text-slate-300 text-center 
              bg-clip-text text-transparent 
              bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50 mx-4"
          >
            <div className="flex md:hidden lg:flex lg:space-x-14">
              <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">
                Website Design
              </div>
              <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">
                Graphic Design
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-3xl xl:text-5xl font-extrabold">
              BARAKAH STUDIOS
            </h1>

            <div className="flex md:hidden lg:flex lg:space-x-14">
              {/* <div onClick={scrollToShopifyStores} className="hover:text-gray-50">
                Shopify Stores
              </div> */}
              <div onClick={scrollToBrands} className="hover:text-gray-50">
                Brands
              </div>
              <Link href="/pricing" className="hover:text-gray-50">
                Pricing
              </Link>
            </div>
        </div>


        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
