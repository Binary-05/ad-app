import React from 'react'

const RegisterForm = () => {
  return (
    <div className=' flex flex-col justify-center pb-20  bg-[#F8F8F8]'>



      <form className='flex flex-col border gap-y-3 h-[90vh] w-[40vw] self-center px-5 py-10 justify-evenly mt-20 bg-white'>

        <h1 className=' text-[2.5rem] pb-5'>Register</h1>

        <div >
          <label className='font-semibold pl-16' >Full Name</label>
          <input type="text" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>

        <div>
          <label className='font-semibold pl-16'>Username</label>
          <input type="text" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>


        <div>
          <label className='font-semibold pl-24'>Email</label>
          <input type="email" name="email" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>

        <div>
          <label className='font-semibold pl-16'>Password</label>
          <input type="password" name="password" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>

        <div>
          <label className='font-semibold '>Confirm password</label>
          <input type="password" name="" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>

        <button className='border border-green-600 bg-green-600 text-white h-10 w-28 mt-4 ml-36'>Register</button>
      </form>

    </div>
  )
}

export default RegisterForm;