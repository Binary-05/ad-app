
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import VendorDashboardLayout from './layouts/VendorDashboardLayout';
import registerForm from './pages/registerForm';





function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <registerForm/>,
    },
    {
      path:"/vendordash",
      element: <VendorDashboardLayout/>
    },
    
  ]);

  
  return <RouterProvider router ={router}/>;
}

export default App;
