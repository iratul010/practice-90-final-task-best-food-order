import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";

function MainLayouts() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 300);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayouts;
