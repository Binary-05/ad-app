import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='img'>
      <section className='flex flex-col gap-y-7 text-white'>
        <div>
          <span>Icon</span>
          <span className='text-[30px] font-bold italic'>B-ADs</span>
        </div>
        <h1 className='flex justify-center text-[5rem] font-bold'>Welcome to B-ADs</h1>
        <p className='flex justify-center font-semibold text-[30px]'>Where would you like to go?</p>
        <p className="flex justify-center font-semibold text-[30px]">SignUp as;</p>
        <div className='flex gap-10 justify-center text-[25px] font-bold'>
          <div className='flex border-2 px-3 rounded-full hover:bg-violet-900 border-violet-900'>
            <button className="text-[#140C00]">Vendor</button>
            <Link to="/vendorform" className="pt-2.5 "><FaAngleRight /></Link>
          </div>
          <div className='flex border-2 rounded-full text-yellow-500 hover:bg-violet-900 border-violet-900'>
            <button className="pl-3">User</button>
            <span className="pt-2.5 px-3 "><FaAngleRight /></span>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Main;