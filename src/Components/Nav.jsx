import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";


const navItems = [
  "Home",
  "About",
  "Menu",
  "Chefs",
  "Reservation",
  "Reviews",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-[108px] max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-2xl text-white shadow-lg shadow-orange-200">
            🍴
          </div>

          <div>
            <h1 className="font-serif text-3xl font-bold leading-none text-[#17202a]">
              Foodzy
            </h1>
            <p className="mt-1 text-[11px] font-medium tracking-[4px] text-gray-400">
              FAST FOOD & RESTAURANT
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative py-10 text-[17px] font-medium transition-colors ${
                index === 0 ? "text-[#171717]"  : "text-[#171717] hover:text-red-600"}`}>
              {item}

              {/* Active underline */}
              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-t-full bg-red-500" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="text-gray-700 transition hover:text-red-600"
          >
            <FaSearch />

          </button>

          {/* Order Button */}
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 font-semibold text-white shadow-lg shadow-red-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 8h12l1 12H5L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden" aria-label="Toggle menu">
          {isOpen ? <IoCloseSharp /> : <LuMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`border-b border-gray-100 px-2 py-3 text-base font-medium ${
                  index === 0 ? "text-red-600" : "text-gray-700"
                }`}
              >
                {item}
              </a>
            ))}

            <button className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white">
              <span>🛍️</span>
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}