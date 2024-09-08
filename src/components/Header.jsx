import React from "react";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white ">
      <div className="container  max-w-[360px] md:max-w-[1440px] mx-auto flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="font-bold">S-KART</span>
        </Link>
        <nav className="hidden md:flex mx-6">
          <ul className="flex space-x-4">
            <li>
              <Link to="/products" className="font-medium">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center ml-auto space-x-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search products..."
                className="pl-8 pr-4 py-2 border rounded-md md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <button className="p-2 border rounded-md">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Cart</span>
          </button>
          <button className="p-2 border rounded-md md:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
