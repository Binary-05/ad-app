
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './pages/Main';
import UserDashboardLayout from './layouts/UserDashboardLayout';
import VendorDashboardLayout from './layouts/VendorDashboardLayout';





function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main/>,
    },
    {
      path:"/userdash",
      element: <UserDashboardLayout/>
    },
    {
      path:"/vendordash",
      element: <VendorDashboardLayout/>
    }

  ]);

  
  return <RouterProvider router ={router}/>;
}

export default App;
