import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { IoPricetags } from "react-icons/io5";
import { BsFillBagHeartFill } from "react-icons/bs";

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);


  return (
    <div className='border-2 pl-3 h-[90vh] pt-6'>
      <div className=''>
        <div className='flex gap-2'>
          <span className='pt-1'><IoHome /></span>
          <span>Overview</span>
        </div>
        <div className='flex gap-2'>
          <span><BsFillBagHeartFill /></span>
          <span>Orders</span>
        </div>
        <div className='flex gap-2 relative'>
          <span className='pt-1'><IoPricetags /></span>
          <span>Products</span>
          <button onClick={() => setClicked(!clicked)}>icon</button>
          {/* <select name="" id="">
            <option>View</option>
          </select> */}
          {clicked && <div className='bg-[#af2828] absolute right-[5px] -bottom-[20px] px-[10px] rounded-[10px]'>
            <p>
              View
            </p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;