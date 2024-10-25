
import { useState } from 'react'
import { apiSignup } from '../../services/auth'
import { Link, useNavigate } from 'react-router-dom'
// import { reg } from "./src/App.css" 

const VendorRegisterForm = () => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault() // prevent the page from reloading
        try {
            // prepare data to be sent to backend
            setLoading(true)
            const formData = new FormData(event.target)  // takes data from the form
            const businessName = formData.get("businessName")
            const firstName = formData.get("firstName")
            const lastName = formData.get("lastName")
            const email = formData.get("email")
            const password = formData.get("password")
            const role = formData.get("role")

            console.log("first name", firstName)

            //Check if passwords match
            // if(password1 !== password2){
            //    return

            // }

            // if key and value are same, pick one eg. firstName, if not then state both separated with a colon (:) eg. firstName: firstName,
            const payload = { businessName, firstName, lastName, email, password, role: "vendor" }

            const response = await apiSignup(payload)
            console.log(response.data)

            //Show a success notification

            navigate("/login") //takes user to the login page after successful registration

        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    return (

        <div className='reg flex flex-col justify-center h-[100vh] bg-[#F8F8F8]'>
            <form onSubmit={handleSubmit} className='flex flex-col  border gap-y-3 h-[90vh] w-[40vw] self-center pl-8 backdrop-filter backdrop-blur-lg'>

                <h1 className=' text-[2rem] mt-8'>Register</h1>
                <div className=' flex flex-col gap-y-5 items-end pr-7'>
                    <div className='pl-3'>
                        <label className='font-bold'>Business Name</label>
                        <input name="businessName" type="text" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                    </div>
                    <div className='pl-3 mt-1'>
                        <label className='font-bold'>First Name</label>
                        <input name="firstName" type="text" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                    </div>
                    <div className='' >
                        <label className='font-bold'>Last Name</label>
                        <input name="lastName" type="text" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                    </div>
                    <div className=''>
                        <label className='font-bold'>Email</label>
                        <input name="email" type="email" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                    </div>
                    <div className=''>
                        <label className='font-bold'>Password</label>
                        <input name="password" type="password" className='border-2 ml-4 p-2 px-20 pl-2 w-80 bg-[#F8F8F8]' />
                    </div>
                    {/* <div className=''>
                        <label className='font-bold'>Role</label>
                        <input name="role" type="password" className='border-2 ml-4 p-2 px-16 w-80 bg-[#F8F8F8]' />
                    </div> */}
                </div>
                <div className='flex'>
                <div className='flex mt-2'>
                    <Link to="/login" type='submit' className='border-2 p-4 py-2 ml-40 mt-4 h-10 w-28 bg-green-600 text-center text-white border-green-600'>
                        {loading ? "Loading..." : "Register"}
                        </Link>
                </div>
                <div className='flex mt-6'>
                    <Link to="/login" type='submit' className='border-2 p-4 py-2 ml-24 h-10 w-28 bg-green-600 text-center text-white border-green-600'>
                       Login
                        </Link>
                </div>
                </div>
            </form>
        </div>
    )
}

export default VendorRegisterForm;