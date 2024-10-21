import React from 'react'
import Sidebar from '../../components/Sidebar';
import { LuCircleDashed } from "react-icons/lu";

const Overview = () => {
  return (
    <div className='pl-52 m-5 pt-16'>
      <button className='border-2 bg-black text-white p-4 rounded-lg'>Select a plan to get your first month for Ghc10</button>
      <div>
        <h1 className='text-[20px] font-semibold pt-5'>Get ready to sell</h1>
        <p className='text-[13px] text-gray-600 font-sans pb-6'>Here is a guide to get started. As your business grows, you'll get fresh tips and insights here.</p>
      </div>
      <div className='border-2 rounded-lg h-[80vh] w-[55vw]'>
        <div className='p-4'>
          <p>Setup guide</p>
          <p>Use this personalized guide to get your store up and running.</p>
          <button className='border-2'>0/5 completed</button>
        </div>
        <div className='flex pl-4 gap-2 pb-3'>
          <span className='pt-1'><LuCircleDashed /></span>
          <span>Add your first Product</span>
          <div className=''>
            <p>Write a description</p>
          </div>
        </div>
        <div className='flex pl-4 gap-2 pb-3'>
          <span className='pt-1'><LuCircleDashed /></span>
          <span>Customize your online store</span>
        </div>
        <div className='flex pl-4 gap-2 pb-3'>
          <span className='pt-1'><LuCircleDashed /></span>
          <span>Add a custom domain</span>
        </div>
        <div className='flex pl-4 gap-2 pb-3'>
          <span className='pt-1'><LuCircleDashed /></span>
          <span>Setup a payment provider</span>
        </div>
        <div className='flex pl-4 gap-2 pb-3'>
          <span className='pt-1'><LuCircleDashed /></span>
          <span>Place a test</span>
        </div>
      </div>
    </div>
  )
}

export default Overview;