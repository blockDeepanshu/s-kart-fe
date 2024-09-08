import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container max-w-[360px] md:max-w-[1440px] mx-auto flex flex-col gap-2 py-6 md:flex-row md:gap-4 md:py-8">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2024 ShopNow Inc. All rights reserved.
        </p>
        <nav className="flex items-center justify-center gap-4 md:ml-auto md:gap-2 md:justify-end">
          <Link
            to="/terms"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
