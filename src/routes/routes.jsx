import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayout";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/Error";
// import DashboardLayout from "../Layouts/DashboardLayout";
 
 
// import Registration from "../pages/Registration";
// import PrivateRoutes from "./PrivateRoutes";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import Services from "../pages/Services";
// import MangeAllRecipe from "../pages/Dashboard/MangeAllRecipe";
 
// import RecipeMaintenance from "../pages/Dashboard/RecipeMaintenance";
// import AddRecipe from "../pages/Dashboard/AddRecipe";
// import EditRecipe from "../pages/Dashboard/EditRecipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage/>,
    children: [
      {
         path: "/",
          element: <Home /> 
        },
      { 
        path: "/about", 
        element: <About />
       },
      { 
        path: "/products", 
        element: <Products />
       },
      { 
        path: "/service", 
        element: <Services />
       },
      { 
        path: "/login", 
        element: <Login />
       },
      { 
        path: "/register", 
        element: <Register />
       },
      { 
        path: "/contact", 
        element: <Contact />
       },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage/>,
    children: [
      // {
      //    index: true,
      //     element: <PrivateRoutes>
      //         <MangeAllRecipe/>
      //     </PrivateRoutes> 
      //   },
      //   {
      //     path: 'all-recipe',
      //     element: <PrivateRoutes>
      //       <MangeAllRecipe/>
      //     </PrivateRoutes>
      //   }
      //   ,
      //   {
      //     path: 'recipe-maintain',
      //     element: <PrivateRoutes>
      //       <RecipeMaintenance/>
      //     </PrivateRoutes>
      //   }
      //   ,
      //   {
      //     path: 'add-recipe',
      //     element: <PrivateRoutes>
      //       <AddRecipe/>
      //     </PrivateRoutes>
      //   }
      //   ,
      //   {
      //     path: 'edit-recipe/:id',
      //     element: <PrivateRoutes>
      //       <EditRecipe/>
      //     </PrivateRoutes>
      //   }
      //   ,
       
     
    ],
  },
]);
