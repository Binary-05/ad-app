import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { BsArrowLeft } from "react-icons/bs";
import { apiGetAdvert } from '../../services/advert';
import { Link } from 'react-router-dom';
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


    // adverts/id
    const handleEdit = (bookId) => {
        navigate(`/addproducts/${bookId}`);
      };


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
                            <p className='text-[25px] font-bold'>Product</p>
                        </div>
                        <div className='space-x-8 '>
                            <button className='border-2 p-1 rounded-lg bg-green-600 text-white border-green-600'>Duplicate</button>
                            <button className='border-2 p-1 rounded-lg bg-green-600 text-white border-green-600'>Preview</button>
                            <button className='border-2 p-1 rounded-lg px-4 text-white bg-green-600 border-green-600'>Share</button>
                        </div>
                    </div>
                    <div className='border-2 h-[90vh] w-[60vw] rounded-xl pl-10'>
                        
                        <div className="flex gap-x-10 mt-5 h-[55vh] justify-center">
                            {
                                ads.map((ad, index) => {
                                    console.log(`${index}: ${ad.title}`);
                                    return <div key={index} className="border-2 h-[75vh] w-[25vw] pl-8 shadow-lg shadow-slate-500">
                                        <div className='h-[35vh] w-[15vw]'>
                                            <img src={`https://savefiles.org/${ad.media}?shareable_link=436`} alt="" className='h-[30vh] pt-2'/>
                                        </div>
                                        <p>{ad.title}</p>
                                        <p className='pt-3'>{ad.description}</p>
                                        <p className='pt-3'>{ad.category}</p>
                                        <p className='pt-3'>{ad.price}</p>
                                        <div className='flex pt-5 gap-12'>
                                            <Link to="/addproducts" onClick={() => handleEdit(book._id)}className='border-2 px-4 rounded-lg bg-green-600 text-white p-1 border-green-600'>Edit</Link>
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