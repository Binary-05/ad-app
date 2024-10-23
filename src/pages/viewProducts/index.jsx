import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { BsArrowLeft } from "react-icons/bs";
import { apiGetAdvert } from '../../services/advert';

const ViewProducts = () => {

    const [ads, setAds] = useState([]);
    const getAds = async () => {
        const response = await apiGetAdvert();
        console.log(response.data)
        setAds(response.data);
    }

    useEffect(() => {
        getAds();
    }, []);


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
                    <div className='border-2 h-[90vh] w-[40vw] rounded-xl pl-10'>
                        
                        <div className="flex gap-x-10 mt-5 h-[55vh]">
                            {
                                ads.map((ad, index) => {
                                    console.log(`${index}: ${ad.title}`);
                                    return <div key={index} className="border-2 h-[65vh] w-[20vw] pl-20 shadow-lg shadow-slate-500">
                                        <div>
                                            <img src={ad.media} alt="" />
                                        </div>
                                        <p>{ad.title}</p>
                                        <p>{ad.description}</p>
                                        <p>{ad.category}</p>
                                        <p>{ad.pricing}</p>
                                        <div className='flex'>
                                            <button className='border-2 px-4 rounded-lg bg-green-600 text-white p-1 border-green-600'>Edit</button>
                                            <button className='border-2  px-4 rounded-lg bg-red-700 text-white p-1 border-red-600'>Delete</button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewProducts;