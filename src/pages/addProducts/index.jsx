import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { BsArrowLeft } from "react-icons/bs";


const AddProducts = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="pl-52">
                    <div className="flex mt-9 ml-9">
                        <span className="pt-3"><BsArrowLeft /></span>
                        <span className="text-[25px] font-bold">Add product</span>
                    </div>
                    <form className="border-2 mt-5 ml-9 w-[50vw] rounded-lg">
                        <div className="m-4">
                            <div className="flex flex-col pb-5">
                                <label>Title</label>
                                <input type="text" className="border-2 p-1 rounded-lg"/>
                            </div>
                            <div className="flex flex-col pb-5">
                                <label>Image</label>
                                <input type="url" className="border-2 h-[30vh] rounded-lg"/>
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Description</label>
                                <input type="text" className="border-2 h-40 rounded-lg"/>
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Category</label>
                                <select name="" id="" className="border-2 p-1 rounded-lg">
                                    <option value="">Jewelry</option>
                                    <option value="">Clothes</option>
                                    <option value="">Shoes</option>
                                    <option value="">Bags</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Pricing</label>
                                <input type="text" className="border-2 p-1 rounded-lg"/>
                            </div>
                        </div>
                    </form>
                    <div>
                        <button className="border-2 p-1 px-3 mt-5 ml-96 bg-green-600 text-white rounded-lg">Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProducts;