import { IoFilterSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-evenly">
      <h1 className="text-3xl">Sleek</h1>
      <input type="search" name="search" id="" />
      <button>Search</button>

      <select name="Account" id="Account">
        <option value=""> My Account</option>
        <option value=""><a href="">Sign In</a></option>
        <option value=""> Orders</option>
        <option value=""> Saved Items</option>
      </select>

      <span><IoFilterSharp /></span>


    </div>
  )
}

export default Navbar;