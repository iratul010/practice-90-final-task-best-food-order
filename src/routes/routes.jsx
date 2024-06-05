import {   createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayout";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/Error";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import Services from "../pages/Services";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddFoodOrder from "../pages/Dashboard/AddFoodOrder";
import MyFoodOrder from "../pages/Dashboard/MyFoodOrder";
import EditFoodOrder from "../pages/Dashboard/EditFoodOrder";
import AllFoodItems from "../pages/Dashboard/AllFoodItems";
 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "all-foods",
        element: (
          <PrivateRoutes>
            <AllFoodItems />
          </PrivateRoutes>
        ),
      },
      {
        path: "all-order",
        element: (
          <PrivateRoutes>
            <MyFoodOrder />
          </PrivateRoutes>
        ),
      },

      {
        path: "food-order",
        element: (
          <PrivateRoutes>
            <AddFoodOrder />
          </PrivateRoutes>
        ),
      },
      {
        path: "all-order/edit/:id",
        element: (
          <PrivateRoutes>
            <EditFoodOrder />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const id = params.id;
          const response = await fetch(`http://localhost:5000/foods/${id}`);
          if (!response.ok) {
            throw new Error('Failed to load food data');
          }
          return response.json();
        },
      },
    ],
  },
]);
