
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RegisterForm from './pages/registerForm/RegisterForm';
import UserPage from './pages/UserPage';
import VendorLoginForm from './pages/loginForms/VendorLoginForm';
import VendorDashboardLayout from './layouts/VendorDashboardLayout';
import Products from './pages/dashboard/Products';
import Orders from './pages/dashboard/Orders';
import Overview from './pages/dashboard/Overview';
import Main from './pages/Main';
import VendorRegisterForm from './pages/registerForm/VendorRegisterForm';
import AddProducts from './pages/addProducts';
import ViewProducts from './pages/viewProducts';
import UserLoginForms from './pages/loginForms/UserLoginForms';
import ViewSingleAd from './pages/viewSingleAd';
import AddAdverts from './pages/addProducts';





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/registerform",
      element: <RegisterForm />
    },
    {
      path: "/vendorform",
      element: <VendorRegisterForm />
    },
    {
      path: "/userpage",
      element: <UserPage />
    },
    {
      path:"/userlogin",
      element: <UserLoginForms />
    },
    {
      path: "/viewsinglead",
      element: <ViewSingleAd/>
    },
    {
      path: "/login",
      element: <VendorLoginForm />
    },
    {
      path:"/addproducts",
      element: <AddProducts />
    },
    {
      path:"/viewproducts",
      element: <ViewProducts />
    },
      {
        path: "/dashboard",
        element: <VendorDashboardLayout />,
        children: [
          {
            path: "overview",
            element: <Overview />
          },
        {
          path: "products",
          element: <Products />,
          // children: [
          //   {
          //     path: "addproducts",
          //     element: <AddProducts />
          //   },
          // ]
        },
        {
          path: "orders",
          element: <Orders />
        }
      ]
    }

  ]);


  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
