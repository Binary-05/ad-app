import React from 'react'

const RegisterForm = () => {
  return (
    <div className=' h-full w-full items-center'>

      <h1 className='font-bold text-[2.5rem]'>Register</h1>

      <form className='flex flex-col  border border-green-600  gap-y-3 h-[90vh] w-[40vw] self-center '>


        <div className='gap-y-2'>
          <label >Full Name</label>
          <input type="text" />
        </div>

        <div>
          <label>Username</label>
          <input type="text" />
        </div>


        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>

        <div>
          <label>Confirm password</label>
          <input type="password" name="" />
        </div>

        <button>Register</button>
      </form>

    </div>
  )
}

export default RegisterForm;