import { useState } from "react";
import { NavLink } from "../../elements/Link/NavLink";
import { MobileMenu } from "../../elements/Link/MobileMenu";
import { Logo } from "../../elements/Logo/Logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-10 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo dan Text */}
          <Logo />
          {/*  Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {/* Link Section (Hidden on Mobile) */}
          <NavLink />
        </div>

        {/* Sign In Button */}
        <button className="hidden px-6 py-2 text-white rounded-md md:block bg-customRed">
          SIGN IN
        </button>
      </div>

      {/* Mobile Menu (Visible on Mobile) */}
      {/* {isMenuOpen && (
        <div className="mt-2 md:hidden">
          <ul className="space-y-4 text-center">
            <li>
              <a
                href="#it-certification"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                IT CERTIFICATION
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="block py-2 text-gray-700 hover:text-green-500"
              >
                CAREERS
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 text-gray-700 hover:text-red-500"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                Apply Now
              </a>
            </li>
            <li>
              <button className="px-6 py-2 text-white rounded-md bg-customRed">
                SIGN IN
              </button>
            </li>
          </ul>
        </div>
      )} */}
      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {/* {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />} */}
      <MobileMenu onClose={() => setIsMenuOpen(false)} isOpen={isMenuOpen} />
    </nav>
  );
};


