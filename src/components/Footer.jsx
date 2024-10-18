
import { BiLogoMastercard } from "react-icons/bi";
import { RiVisaLine } from "react-icons/ri"
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className=" mt-10 px-10 py-5 bg-black text-white grid grid-cols-5 ">


      <div className="flex flex-col">
        <h4 className="font-bold">NEED HELP?</h4>
        <a href="#">Chat with Us</a>
        <a href="#">Help Center</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="flex flex-col ">
        <h4 className="font-bold">USEFUL LINKS</h4>
        <a href="">Service centers</a>
        <a href="">Delivery Timelines and fees</a>
        <a href="">Report a product</a>
      </div>



      <div className="flex flex-col">
        <h4 className="font-bold">ABOUT US</h4>
        <a href=""> About Us</a>
        <a href=""> Testimonials</a>
        <a href=""> Terms and Conditions</a>
        <a href="">Flash Sales</a>
      </div>

      <div>
        <h4 className="font-bold">JOIN US</h4>
        <div className="flex text-3xl gap-2">
          <a href=""><FaFacebook /></a>
          <a href="">< BsInstagram /></a>
          <a href=""><RiTwitterXFill /></a>
        </div>
      </div>


      <div>
        <h4 className="font-bold">PAYMENT METHODS</h4>
        <div className="flex text-3xl gap-2 ">
          <a href="" className=""><BiLogoMastercard /></a>
          <a href=""><RiVisaLine /></a>
          <a href=""><FaHandHoldingUsd /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;