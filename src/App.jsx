
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import VendorDashboardLayout from './layouts/VendorDashboardLayout';
import RegisterForm from './pages/registerForm/RegisterForm';





function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <RegisterForm/>
    },
    {
      path:"/vendordash",
      element: <VendorDashboardLayout/>
    },
    
  ]);

  
  return <RouterProvider router ={router}/>;
}

export default App;
