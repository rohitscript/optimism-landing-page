import React, { useState } from "react";
import logo from "../assets/optimism.svg";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Vision", url: "/" },
    { name: "Build", url: "#" },
    { name: "Governance", url: "#" },
    { name: "Apps", url: "#" },
    { name: "Bridge", url: "#" },
  ];

  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mx-4 p-2 bg-white">
        <div className="cursor-pointer">
          <img className="" src={logo} alt="Logo" />
        </div>

        <ul className="font-bold text-neutral-600 lg:flex gap-1 hidden">
          {navLinks.map((link, index) => (
            <li className="font-bold list-none px-6 lg:px-12" key={index}>
              {link.name}
            </li>
          ))}
        </ul>
        <div className="lg:block hidden">
          <Button text="Join" />
        </div>

        <div
          className="rounded-full border p-2 border-neutral-400 lg:hidden cursor-pointer"
          onClick={handleToggle}
        >
          {toggleOpen ? <X height={24} /> : <Menu height={24} />}
        </div>
      </div>

      {toggleOpen && (
        <div className="bg-white shadow-lg h-screen w-2/3 flex absolute right-0 lg:hidden p-2 transition-all duration-200">
          <ul className="font-semibold text-neutral-800 gap-1 py-4 w-full mx-4">
            {navLinks.map((link, index) => (
              <div className="flex items-center border-b border-b-neutral-200" key={index}>
                <Menu color="red" />
                <li className="list-none p-3">{link.name}</li>
              </div>
            ))}
            <div className="pt-4 lg:hidden ">
            <Button text="Join" />
          </div>
          </ul>
          
        </div>
      )}
    </>
  );
};

export default Header;
