import { FaAngleRight } from "react-icons/fa";

const Main = () => {
  return (
    <div className='img'>
      <section className='flex flex-col gap-y-7 text-white'>
        <div>
          <span>Icon</span>
          <span className='text-[30px] font-bold italic'>Sleek</span>
        </div>
        <h1 className='flex justify-center text-[5rem] font-bold'>Welcome to Sleek</h1>
        <p className='flex justify-center font-semibold text-[30px]'>Where would you like to go?</p>
        <div className='flex justify-between ml-80 mr-80 text-[25px] font-bold'>
        <div className='flex border-b-2 pb-2 border-green-700'>
          <span>SignUp as a Vendor</span>
          <span className="pt-2.5 hover:text-green-700"><FaAngleRight /></span>
        </div>
        <div className='flex border-b-2 pb-2 border-green-700'>
          <span>SignUp as a User</span>
          <span className="pt-2.5 hover:text-green-700"><FaAngleRight /></span>
        </div>
        </div>
      </section>



    </div>
  )
}

export default Main;