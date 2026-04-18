import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

        {/*LOGO secttion*/}
        <Link to="/" className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-blue-300 rounded-full "></span>
          <span className="w-4 h-4 bg-pink-300 rounded-full -ml-3.5"></span>
          <h1 className="font-serif text-2xl font-semibold">GoDam</h1>
        </Link>

        {/*large menu*/}
        <div className="hidden md:flex items-center space-x-6 text-sm pl-8 pr-8 border-r border-l font-serif">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-300 pb-1"
                : "text-gray-500 pb-1"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-300 pb-1"
                : "text-gray-500 pb-1"
            }
          >
            Product
          </NavLink>
        </div>

        {/*clerk auth library*/}
        <div className="hidden md:flex items-center space-x-3">
          <SignedOut>
            <SignUpButton mode="modal">
             <button
  className="group relative cursor-pointer
  px-6 py-2
  text-xl md:text-2xl
  font-serif font-semibold
  text-black
  tracking-wide
  transition-all duration-500 ease-out
  hover:text-blue-300"
>
  <span className="relative z-10">Sign Up</span>

  <span
    className="absolute left-0 bottom-0 h-[2px] w-full
    bg-gradient-to-r from-zinc-400 to-slate-500
    origin-left scale-x-100
    transition-transform duration-500 ease-out
    group-hover:scale-x-110"
  ></span>

  <span
    className="absolute inset-0 rounded-md opacity-0
    bg-white/5 blur-sm
    transition-all duration-500
    group-hover:opacity-100"
  ></span>
</button>
            </SignUpButton>
          </SignedOut>

          
        </div>

        {/*for responsive hamburgur icon*/}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/*moblie and tablet*/}
      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-5 border-t bg-gray-100">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="text-gray-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            onClick={() => setOpen(false)}
            className="text-gray-600"
          >
            Product
          </NavLink>

          <SignedOut>
            <SignUpButton mode="modal">
              <button className="text-sm underline cursor-pointer hover:text-blue-300">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton signOutUrl="/" />
          </SignedIn>

        </div>
      )}
    </div>
  );
};

export default Navbar;