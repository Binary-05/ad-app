import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { BsArrowLeft } from "react-icons/bs";

const EditAdverts = () => {
    // const { id } = useParams();
    // const [formData, setFormData] = useState({
    //     title: '',
    //     media: null,
    //     description: '',
    //     category: '',
    //     price: '',
    // });

   
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="pl-52 pt-16">
                    <div className="flex mt-9 ml-9">
                        <span className="pt-3"><BsArrowLeft /></span>
                        <span className="text-[25px] font-bold">Edit Advert</span>
                    </div>
                    <form className="border-2 mt-5 ml-9 w-[50vw] rounded-lg">
                        <div className="m-4">
                            <div className="flex flex-col pb-5">
                                <label>Title</label>
                                <input type="text"
                                className="border-2 p-1 rounded-lg" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label>Media</label>
                                <input type="file" className="border-2 h-[30vh] rounded-lg" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Description</label>
                                <input type="text" 
                                     className="border-2 h-40 rounded-lg" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Category</label>
                                <select name="" id="" 
                                     className="border-2 p-1 rounded-lg">
                                    <option value="">Electronics</option>
                                    <option value="">Clothing</option>
                                    <option value="">Interior</option>
                                    <option value="">Accessories</option>
                                    <option value="">Automobile</option>
                                    <option value="">Kitchen</option>
                                    <option value="">Art</option>
                                    <option value="">Food</option>
                                    <option value="">Construction</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Pricing</label>
                                <input type="text" 
                                     className="border-2 p-1 rounded-lg" />
                            </div>
                        </div>
                    </form>
                    <div className='flex'>
                        <button className="border-2 p-1 px-3 mt-5 bg-green-600 text-white rounded-lg" type="submit">Edit</button>
                        <button className='border-2 p-1 px-3 mt-5  bg-red-500 text-white rounded-lg'>Delete</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditAdverts;