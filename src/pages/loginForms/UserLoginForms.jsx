import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { apiSignin } from "../../services/auth";
import { Link } from "react-router-dom";


const UserLoginForms = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    //logic to handle login goes here 
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log("email", email, "password", password);
    //console.log  ('email', email,)
    const response = await apiSignin({ email, password });
    // console.log(response.data)
    if (response.status === 200) {
      localStorage.setItem("token",response.data.accessToken)
    }
  };

  return (
    <div className="log">
      <div>
        <p className="flex text-[25px] font-semibold pl-96 pr-16 mt-8">Login as a User</p>
        <form onSubmit={handleSubmit} className=' border-2 w-[35vw] h-[80vh] ml-96 mt-5 bg-white '>
          <p className='flex text-[28px] justify-center pb-5'>Login</p>
          <div className="pl-16">
            <div className='flex flex-col'>
              <label htmlFor="">Email</label>
              <input type="text" name="email" className='border-2 w-[25vw] p-2 rounded-lg mb-3' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Password</label>
              <input type="password" name="password" className='border-2 w-[25vw] p-2 rounded-lg mb-3' />
            </div>
            <div className="flex mb-3">
              <div className='flex'>
                <p className="pt-1 rounded-lg"><MdCheckBoxOutlineBlank /></p>
                <p>Show Password</p>
              </div>
              <p className="pl-24 text-blue-700">Forgot Password?</p>
            </div>
            <button type="submit" className="boredr-2 bg-blue-700 text-white p-2 w-[25vw] rounded-lg mb-2">LOGIN</button>
          </div>
          <div className="flex justify-center">
            <p>Don't have an account?</p>
            <Link to="/registerform"><p className="text-blue-700">Sign UP</p></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLoginForms;