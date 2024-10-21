import React from 'react'

const VendorLoginForm = () => {
  return (
    <div>
      <div>
        <form className='border-2 w-[50vw] h-[50vh] ml-40 mt-20'>
          <p className='flex text-[28px] justify-center pb-5'>Login</p>
          <div className='flex flex-col'>
          <label htmlFor="">Email</label>
          <input type="text" className='border-2 w-[25vw] p-2 rounded-lg' />
          </div>
          <div>
          <label htmlFor="">Password</label>
          <input type="text" />
          </div>
          <div>
            <div>
              <p>logo</p>
              <p>Show Password</p>
            </div>
            <p>Forgot Password</p>
          </div>
          <button>LOGIN</button>
          <div>
          <p>Don't have an account?</p>
          <p>Sign UP</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VendorLoginForm;