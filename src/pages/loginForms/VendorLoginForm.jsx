import { MdCheckBoxOutlineBlank } from "react-icons/md";

const VendorLoginForm = () => {
  return (
    <div>
      <div>
        <p className="flex text-[25px] font-semibold pl-96 pr-16 mt-8">Login as a Vendor</p>
        <form className=' border-2 w-[35vw] h-[80vh] ml-96 mt-5'>
          <p className='flex text-[28px] justify-center pb-5'>Login</p>
          <div className="pl-16">
          <div className='flex flex-col'>
            <label htmlFor="">Email</label>
            <input type="text" className='border-2 w-[25vw] p-2 rounded-lg mb-3' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Password</label>
            <input type="text" className='border-2 w-[25vw] p-2 rounded-lg mb-3'/>
          </div>
          <div className="flex mb-3">
            <div className='flex'>
              <p className="pt-1 rounded-lg"><MdCheckBoxOutlineBlank /></p>
              <p>Show Password</p>
            </div>
            <p className="pl-24 text-blue-700">Forgot Password?</p>
          </div>
          <button className="boredr-2 bg-blue-700 text-white p-2 w-[25vw] rounded-lg mb-2">LOGIN</button>
          </div>
          <div className="flex justify-center">
            <p>Don't have an account?</p>
            <p className="text-blue-700">Sign UP</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VendorLoginForm;