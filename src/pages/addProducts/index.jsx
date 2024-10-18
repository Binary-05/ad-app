import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { BsArrowLeft } from "react-icons/bs";


const AddProducts = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div>
                <div className="flex">
                    <span className="pt-1"><BsArrowLeft /></span>
                    <span>Add Product</span>
                </div>
                <form>
                    <div className="">
                        <div className="flex flex-col">
                            <label htmlFor="">Title</label>
                            <input type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Image</label>
                            <input type="url" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Description</label>
                            <input type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Category</label>
                            <select name="" id="">
                                <option value="">Jewelry</option>
                                <option value="">Clothes</option>
                                <option value="">Shoes</option>
                                <option value="">Bags</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Pricing</label>
                            <input type="text" />
                        </div>
                    </div>
                </form>
                </div>
            </div>

        </div>
    )
}

export default AddProducts;