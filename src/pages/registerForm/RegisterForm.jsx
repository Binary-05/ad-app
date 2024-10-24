import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiSignup } from '../../services/auth'
import { toast } from 'react-toastify'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault() //prevents page from reloading

    try {
      //prepare data for the backend
      setLoading(true)
      const formData = new FormData(event.target) //grabs data from the form

      const businessName = formData.get("businessName")
      const firstName = formData.get("firstName")
      const lastName = formData.get("lastName")
      const email = formData.get("email")
      const password = formData.get("password")
      // const role = formData.get("role")
      console.log('first name', firstName)

      //Check if passwords match
      // if(password1 !== password2){
      //    return

      // }

      // if key and value are same, pick one eg. firstName, if not then state both separated with a colon (:) eg. firstName: firstName,
      const payload = { businessName, firstName, lastName, email, password, role: "vendor" }

      const response = await apiSignup(payload)
      console.log(response.data)

      //Show a success notification
      toast.success("Success")
      navigate("/login") //takes user to the login page after successful registration


    } catch (error) {
      console.log(error)
      toast.error("Errror creating an account")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=' flex flex-col justify-center pb-20  bg-[#F8F8F8] '>



      <form onSubmit={handleSubmit} className='flex flex-col border gap-y-3 h-[90vh] w-[40vw] self-center px-5 py-10 justify-evenly mt-20 bg-white'>

        <h1 className=' text-[2.5rem] pb-5'>Register</h1>

        <div>
          <label className='font-semibold pl-8 '>Business Name</label>
          <input type="text" name="businessName" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>

        <div >
          <label className='font-semibold pl-16' >First Name</label>
          <input type="text" name='firstName' className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>

        <div>
          <label className='font-semibold pl-16'>Last Name</label>
          <input type="text" name='lastName' className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>


        <div>
          <label className='font-semibold pl-24'>Email</label>
          <input type="email" name="email" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>

        <div>
          <label className='font-semibold pl-16'>Password</label>
          <input type="password" name="password" className='w-2/3 h-10 ml-4 border-2 bg-[#F8F8F8]' />
        </div>


        <button className='border border-green-600 bg-green-600 text-white h-10 w-28 mt-4 ml-36'>{loading ? "Loading..." : "Register"}</button>
      </form>

    </div>
  )
}

export default RegisterForm;