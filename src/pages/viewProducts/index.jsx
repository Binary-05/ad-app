import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { BsArrowLeft } from "react-icons/bs";

const ViewProducts = () => {
    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className='pl-52 m-5 pt-10'>
                    <p className='text-[20px] font-semibold'>Welcome to your store</p>
                    <div className='flex space-x-72 pb-5'>
                        <div className='flex'>
                            <p className='pt-2.5'><BsArrowLeft /></p>
                            <p className='text-[25px] font-bold'>Product name</p>
                        </div>
                        <div className='space-x-8 '>
                            <button className='border-2 p-1 rounded-lg bg-green-600 text-white border-green-600'>Duplicate</button>
                            <button className='border-2 p-1 rounded-lg bg-green-600 text-white border-green-600'>Preview</button>
                            <button className='border-2 p-1 rounded-lg px-4 text-white bg-green-600 border-green-600'>Share</button>
                        </div>
                    </div>
                    <div className='border-2 h-[90vh] rounded-xl'>Items</div>
                    <div className='pt-5 ml-96'>
                        <button className='border-2 ml-52 px-4 rounded-lg bg-green-600 text-white p-1 border-green-600'>Edit</button>
                        <button className='border-2 ml-16 px-4 rounded-lg bg-red-700 text-white p-1 border-red-600'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts;