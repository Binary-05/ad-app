import { IoFilterSharp } from "react-icons/io5";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="flex justify-evenly h-16 bg-black place-items-center fixed left-0 right-0">
      <h1 className="text-3xl text-white">B-ADs</h1>
      <input type="search" name="search" id="" className="h-12 w-6/12 rounded-md" />
      <button className="bg-green-600 text-white py-3 px-9 rounded-lg">Search</button>

      <select name="Account" id="Account" className="w-32 h-10">
        <option value=""> My Account</option>
        <option value="">Sign In</option>
        <option value=""> Orders</option>
        <option value=""> Saved Items</option>
        <option value=""> Log Out</option>
      </select>

      
      <span className="text-white text-3xl"><IoFilterSharp /></span>


    </div>
  )
}

export default Navbar;