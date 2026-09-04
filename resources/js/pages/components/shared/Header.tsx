import React from 'react';
import { Search, User, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className=" relative max-w-[90%] mx-auto flex items-center justify-between p-4 z-50 bg-transparent">
      {/* Logo */}
      <div className=" flex items-center justify-center pt-2">
        <img
          src="/jack-yak-logo.png"
          alt="Jack Yak Logo"
          className="h-14 w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex   flex-1 flex-row justify-center items-center space-x-5">
        <ul className="flex flex-row text-white justify-center items-center space-x-6">
          <li><a href="#destination">Destination</a></li>
          <li><a href="#guides">Guides</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      {/* Action Buttons / Icons */}
      <div className="flex items-center gap-2 md:gap-4 ">
        <button aria-label="Menu" className="">
          <Heart className="w-5 h-5 text-white" />
        </button>
        <button aria-label="Search">
          <Search className="w-5 h-5 text-white rotate-[9.82deg]" />
        </button>
        <button aria-label="Profile">
          <User className="w-5 h-5 text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
