import { IoFilterSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="flex justify-evenly h-16 bg-black place-items-center fixed left-0 right-0">
      <h1 className="text-3xl text-white">B-ADs</h1>
      <input type="search" name="search" id="" className="h-12 w-6/12 rounded-md" />
      <button className="bg-green-600 text-white py-3 px-9 rounded-lg">Search</button>


      <div className="dropdown">
        <div className="dropdown-button flex gap-5 align-middle items-center bg-transparent border p-3 rounded-md border-white text-white">
          <span className="flex gap-1">  <VscAccount className="text-2xl" />My Account</span>
        </div>
        <div className="dropdown-content text-white">
          <Link to="/login"> Sign In</Link>
          <Link to=""> Orders</Link>
          <Link to=""> Saved Items</Link>
          <Link to="/"> Log Out</Link>
        </div>
      </div>

      <div className="drpdwn text-center justify-center">
        <span className="drop text-white text-3xl"><IoFilterSharp /></span>
        <div className="drpdwn-content">
          <form>
            <p>Title</p>
            <input type="text" className="rounded" />

            <p>Category</p>
            <input type="text" className="rounded" />

            di

            <button className="border border-black">Submit</button>
          </form>
           
        </div>
      </div>


    </div>
  )
}

export default Navbar;