import React from 'react'
import Sidebar from '../../components/Sidebar';
import { LuCircleDashed } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div className='pl-80 m-5 pt-16 bg-[#F1F1F1] w-[100vw]'>
      <button className='border-2 bg-black text-white p-4 rounded-lg border-black'>Select a plan to get your first month for Ghc10</button>
      <div>
        <h1 className='text-[20px] font-semibold pt-5'>Get ready to sell</h1>
        <p className='text-[13px] text-gray-600 font-sans pb-6'>Here is a guide to get started. As your business grows, you'll get fresh tips and insights here.</p>
      </div>
      <div className='border-2 rounded-lg h-[80vh] w-[55vw] bg-white'>
        <div className='p-4'>
          <p>Setup guide</p>
          <p>Use this personalized guide to get your store up and running.</p>
          <button className='border-2 px-3 rounded-lg border-gray-500'>0/5 completed</button>
        </div>
        <div className='flex pl-4 gap-2 pb-3 bg-[#F1F1F1] ml-2 mr-3 rounded-lg'>
          <div className=''>
          <div className='flex gap-2'>
          <span className='pt-1'><LuCircleDashed /></span>
          <span>Add your first Product</span>
          </div>
          <div className='pl-6'>
          <p>Write a description, add photos, and set pricing for the products you plan to sell.</p>
          <p className='pb-2 text-blue-700'>Learn more</p>
          <Link to="/addproducts" className='border-2 p-2 rounded-lg bg-black text-white border-black'>Add product</Link>
          </div>
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