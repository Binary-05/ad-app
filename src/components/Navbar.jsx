import { IoFilterSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";


const Navbar = () => {
  return (
    <div className="flex justify-evenly h-16 bg-black place-items-center">
      <h1 className="text-3xl text-white">Sleek</h1>
      <input type="search" name="search" id="" className="h-12 w-6/12 rounded-md"/>
      <button className="bg-green-600 text-white py-4 px-9">Search</button>

      <select name="Account" id="Account" className="w-32 h-10">
        <option value=""> <VscAccount />My Account</option>
        <option value=""><a href="">Sign In</a></option>
        <option value=""> Orders</option>
        <option value=""> Saved Items</option>
      </select>

      <span className="text-white text-3xl"><IoFilterSharp /></span> 


    </div>
  )
}

export default Navbar;