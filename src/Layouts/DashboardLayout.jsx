import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import profile from "../assets/profile.png";

const Drawer = () => {
  const navigate = useNavigate();
  const { user, logOut, loading } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);
  const openButtonRef = useRef(null);
  const mainContentRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutsideDrawer = (event) => {
      if (
        isOpen &&
        drawerRef.current &&
        openButtonRef.current &&
        !drawerRef.current.contains(event.target) &&
        !openButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutsideDrawer);

    return () => {
      document.removeEventListener("click", handleClickOutsideDrawer);
    };
  }, [isOpen]);

  const handleMainContentClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogOut = async () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      await logOut();
      navigate("/");
    }
    return;
  };
  
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative flex h-screen">
      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-full md:w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow p-4">
            <nav>
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-4">Profile</h2>
                  <div className="flex justify-center items-center h-full">
                    <div className="online avatar">
                      {user?.photoURL ? (
                        <div className="w-12 avatar rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      ) : (
                        <div className="avatar rounded-full">
                          <div className="w-12">
                            <img src={profile} className="" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p>Name: {user?.displayName}</p>
                    <p>Email: {user?.email}</p>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Menu</h2>
                </div>
              </div>
              <ul>
                <li className="mb-2">
                  <NavLink
                    to="/dashboard/all-foods"
                    className="btn p-2 rounded hover:bg-slate-600 w-full"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "white" : "black",
                        backgroundColor: isActive ? "rgb(234,88,12)" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    All Foods 
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink  
                    to="/dashboard/all-order"
                    className="btn p-2 rounded hover:bg-slate-600 w-full"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "white" : "black",
                        backgroundColor: isActive ? "rgb(234,88,12)" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    My All Orders
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    to="/dashboard/food-order"
                    className="btn p-2 rounded hover:bg-slate-600 w-full"
                    style={({ isActive, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "white" : "black",
                        backgroundColor: isActive ? "rgb(234,88,12)" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  >
                    Add Food Order
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="p-4">
            <button
              onClick={handleLogOut}
              className="btn w-full py-2 mb-2 bg-red-600 hover:bg-red-700 rounded text-white"
            >
              Logout
            </button>
            <Link
              to="/"
              className="btn bg-green-600 w-full py-2 hover:bg-green-700 rounded text-white"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={mainContentRef}
        className={`flex-grow bg-gray-100 p-8 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
        onClick={handleMainContentClick}
      >
        <div className="grid grid-cols-1">
          {/* Left Side: Drawer Button or Name */}
          <div className="flex flex-col items-start justify-start">
            {!isOpen && (
              <button
                ref={openButtonRef}
                onClick={toggleDrawer}
                className="p-2 bg-blue-600 text-white rounded w-full md:w-auto"
              >
                Open Drawer
              </button>
            )}
          </div>

          {/* Mid Context Section */}
          <div className="flex flex-col items-center justify-center">
            
            <Outlet />
          </div>

          {/* Right Side Section */}
          
          {/* <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Right Section</h2>
            <p>Some additional context or components can go here.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
