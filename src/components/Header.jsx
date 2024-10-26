import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container max-w-[360px] md:max-w-[1440px] mx-auto flex h-16 items-center">
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
          <div className="relative">
            <button onClick={toggleProfile} className="p-2 border rounded-md">
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
              </div>
            )}
          </div>
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



