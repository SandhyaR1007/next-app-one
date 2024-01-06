"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen((prev) => !prev);
  return (
    <nav className="flex justify-between gap-5 px-10 py-2 text-slate-100">
      <div className="font-bold text-xl">BELLOGS</div>
      <div className="hidden sm:flex gap-5 ">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className={`${
              pathName === item.path
                ? "bg-slate-100 text-black px-3 py-0.5 rounded-md shadow-lg"
                : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="sm:hidden block">
        {isOpen ? (
          <MobileMenu
            navItems={navItems}
            pathName={pathName}
            handleIsOpen={handleIsOpen}
          />
        ) : (
          <button onClick={handleIsOpen}>Menu</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const MobileMenu = ({ navItems, pathName, handleIsOpen }) => {
  return (
    <div className=" sm:hidden flex flex-col gap-10 bg-black absolute top-0 right-0 h-screen w-[250px] py-10 px-5 shadow-lg transition-all">
      <button className="self-end" onClick={handleIsOpen}>
        Close
      </button>
      <div className="flex flex-col items-center  gap-10">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className={`${
              pathName === item.path
                ? "bg-slate-100 text-black px-3 py-0.5 rounded-md shadow-lg"
                : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
