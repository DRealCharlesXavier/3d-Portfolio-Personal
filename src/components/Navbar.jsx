"use client";
import React from "react";

import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

import { NavLink } from "react-router-dom";

import { useColorMode } from "@/components/ui/color-mode";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const bgColor = colorMode === "light" ? "bg-white" : "bg-gray-800";
  const textColor = colorMode === "light" ? "text-black" : "text-white";

  return (
    <header className={`header ${bgColor} ${textColor}`}>
      <NavLink
        to="/"
        className={`w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md ${bgColor}`}
      >
        <p className={`blue-gradient_text ${textColor}`}>XC</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : textColor
            } hover:text-blue-400 transition-colors`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : textColor
            } hover:text-blue-400 transition-colors`
          }
        >
          Projects
        </NavLink>

        <IconButton
          onClick={toggleColorMode}
          variant="outline"
          size="sm"
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <LuMoon /> : <LuSun />}
          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        />
      </nav>
    </header>
  );
};

export default Navbar;
