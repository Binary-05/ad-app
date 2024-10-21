import React from 'react'
// import { reg } from "./src/App.css" 

const VendorRegisterForm = () => {
    return (
           
            <div className='reg flex flex-col justify-center h-[100vh] bg-[#F8F8F8]'>


                <form className='flex flex-col  border gap-y-3 h-[130vh] w-[40vw] self-center pl-8 bg-[#FFFFFF]'>

                    <h1 className=' text-[2rem] mt-8'>Register</h1>

                    <div className=' flex flex-col gap-y-5 items-end pr-7'>
                        <div className='pl-3'>
                            <label className='font-bold'>First Name</label>
                            <input type="text" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                        </div>
                        <div className='pl-3 mt-1'>
                            <label className='font-bold'>Last Name</label>
                            <input type="text" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                        </div>

                        <div className='' >
                            <label className='font-bold'>Username</label>
                            <input type="text" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                        </div>


                        <div className=''>
                            <label className='font-bold'>Email</label>
                            <input type="email" name="email" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                        </div>

                        <div className=''>
                            <label className='font-bold'>Password</label>
                            <input type="password" name="password" className='border-2 ml-4 p-2 px-20 pl-2 w-80 bg-[#F8F8F8]' />
                        </div>

                        <div className=''>
                            <label className='font-bold'>Confirm password</label>
                            <input type="password" name="" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                        </div>
                        <div>
                            <label className='font-bold'>Phone</label>
                            <input type="phone" name="" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                        </div>
                    </div>
                    <div>
                        <button className='border-2 p-4 py-2 ml-40 mt-4 h-10 w-28 bg-green-600 text-center text-white border-green-600'>Register</button>
                    </div>
                </form>
            </div>
    )
}

export default VendorRegisterForm;