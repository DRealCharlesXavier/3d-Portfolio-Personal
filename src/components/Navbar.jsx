"use client";
import React from "react";

import { IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

import { NavLink } from "react-router-dom";

import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const ColorModeToggle = () => {
    return (
      <IconButton
        onClick={toggleColorMode}
        variant="outline"
        size="sm"
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <LuMoon /> : <LuSun />}
      />
    );
  };

  const bgColor = colorMode === "light" ? "bg-white" : "bg-gray-800";
  const textColor = colorMode === "light" ? "text-black" : "text-white";

  return (
    <header className="header">
      <NavLink
        to="/"
        className={`w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md ${bgColor}`}
      >
        <p className="blue-gradient_text">XC</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <ColorModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
