import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";

const Navbar = () => {
  const { loading, logOut, user } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
const name = user?.displayName.split(' ').map(w=> w[0]).join('')
console.log(name)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !navbarRef.current.contains(event.target) &&
        !event.target.classList.contains("mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const logoutHandle = async () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      await logOut();
    }
    return;
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <nav ref={navbarRef} className="bg-orange-800 p-4 w-full fixed z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="../src/assets/motorcycle-5220717_1920.png"
            alt="Logo"
            className="h-8 mr-2"
          />
          <span className="text-white text-lg font-semibold">Food Order</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            to="/"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </Link>
          {user && <Link
                to="/dashboard"
                className="text-white hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Dashboard
              </Link>}
          <Link
            to="/about"
            className="text-white hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/service"
            className="text-white hover:text-teal-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-pink-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Contact
          </Link>
          {!user ? (
            <>
              {" "}
              <Link
                to="/login"
                className="text-white hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logoutHandle}
              className="text-white hover:text-cyan-500 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Logout
            </button>
          )}
         
         {user &&  <div className="avatar online placeholder">
            <div className="bg-green-500 font-mono text-neutral-content rounded-full w-12">
              <span className="text-xl">{name || ''}</span>
            </div>
          </div> }
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none mobile-menu-button"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 6h18v1H3V6zm0 5h18v1H3v-1zm0 5h18v1H3v-1z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-0 right-0  bg-orange-900 p-5 w-full shadow-lg mobile-menu bg-opacity-90 animate-mobile-menu">
            <div className="flex flex-col gap-4 items-center justify-center h-full">
              <Link
                to="/"
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Home
              </Link>
             {user && <Link
                to="/dashboard"
                className="text-white hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Dashboard
              </Link>}
              <Link
                to="/about"
                className="text-white hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                About
              </Link>
              <Link
                to="/service"
                className="text-white hover:text-teal-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-pink-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Contact
              </Link>
              {!user ? (
                <>
                  {" "}
                  <Link
                    to="/login"
                    className="text-white hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={logoutHandle}
                  className="text-white hover:text-cyan-500 transition duration-300 ease-in-out transform hover:scale-110"
                >
                  Logout
                </button>
              )}
            
            </div>
            {/* Close Icon */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-0 right-0 m-4 text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M18.707 5.293a1 1 0 0 1 0 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L12 10.586l5.293-5.293a1 1 0 0 1 1.414 0z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
