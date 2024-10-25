import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { IoPricetags } from "react-icons/io5";
import { BsFillBagHeartFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);


  return (
    <div className='flex border-2 pl-3 h-[90vh] w-[15vw] pt-6 fixed mt-16 bg-[#F1F1F1]'>
      <div className=''>
        <div className='flex gap-2 pb-2'>
          <span className='pt-1'><IoHome /></span>
          <span>Overview</span>
        </div>
        <div className='flex gap-2 pb-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Orders</span>
        </div>
        <div className='flex gap-2 relative pb-2'>
          <span className='pt-1'><IoPricetags /></span>
          <span>Products</span>
          <button onClick={() => setClicked(!clicked)}><BsChevronDown /></button>
          {clicked && <div className='border-2 absolute right-[5px] -bottom-[20px] px-[10px] mr-16 rounded-[10px]'>
            <p>
              View
            </p>
          </div>}
        </div>
        <div className='flex gap-2 pb-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Customers</span>
        </div>
        <div className='flex gap-2 pb-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Content</span>
        </div>
        <div className='flex gap-2 pb-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Analytics</span>
        </div>
        <div className='flex gap-2 pb-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Marketing</span>
        </div>

        <p className='flex mt-4 text-[13px] font-semibold '>Sales channels</p>
        <div className='flex gap-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Online Store</span>
        </div>
        <div className='flex gap-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Point of Sale</span>
        </div>
        <p>Apps</p>
        <div className='flex gap-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Add apps</span>
        </div>
        <div className='flex gap-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Settings</span>
        </div>

      </div>

    </div>
  )
}

export default Sidebar;