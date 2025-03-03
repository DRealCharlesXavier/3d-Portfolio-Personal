"use client"
import React from "react";

import { NavLink, Link, useNavigate } from "react-router-dom";

import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.600", "gray.300");

  return (
    <header className="header">
      <NavLink
        to="/"
        className={`w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md ${
          useColorMode === "light" ? "bg-white" : "bg-gray-800"
        }`}
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
      </nav>
    </header>
  );
};

export default Navbar;
