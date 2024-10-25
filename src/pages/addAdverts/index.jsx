import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { BsArrowLeft } from "react-icons/bs";
import { apiAddAdverts } from "../../services/advert";
import { Link, useNavigate } from "react-router-dom";


const AddAdverts = () => {
    // const saveAdvert = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);

    //     try {
    //         await apiAddAdverts(formData);
    //         setFeedbackMessage("Advert added successfully!");

    //     } catch (error) {
    //         setFeedbackMessage("Failed to add advert. Please try again.");
    //         setIsError(true);
    //     }


    // };

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        try {
            event.preventDefault(); // Prevent the page for reloading
            // collect the form data and post to the api
            const formData = new FormData(event.target);

            const response = await apiAddAdverts(formData);  // post data to api
            console.log(response.data)
            // Redirect to the all adverts page
            navigate('/viewproducts')
        } catch (error) {
            console.log("error", error)
        }
    };


    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="pl-52 pt-16 bg-[#F1F1F1] w-full">
                    <div className="flex mt-9 ml-9">
                        <Link to={"/dashboard"} className="pt-3"><BsArrowLeft /></Link>
                        <span className="text-[25px] font-bold">Add Advert</span>
                    </div>
                    <form onSubmit={handleSubmit} className="border-2 mt-5 ml-9 w-[50vw] rounded-lg bg-[#FFFFFF]">
                        <div className="m-4">
                            <div className="flex flex-col pb-5">
                                <label>Title</label>
                                <input type="text" className="border-2 p-1 rounded-lg " name="title" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label>Media</label>
                                <input type="file" className="border-2 h-20 rounded-lg" name="media" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Description</label>
                                <input type="text" className="border-2 h-20 rounded-lg" name="description" />
                            </div>
                            <div className="flex flex-col pb-5">
                                <label htmlFor="">Category</label>
                                <input type="text" className="border-2 h-10 rounded-lg" name="category" />
                            </div>
                            {/* <div className="flex flex-col pb-5">
                                <label htmlFor="">Category</label>
                                <select name="" id="" className="border-2 p-1 rounded-lg">
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
                            </div> */}
                            <div className="flex flex-col">
                                <label htmlFor="">Pricing</label>
                                <input type="text" className="border-2 p-1 rounded-lg" name="price" />
                            </div>
                        </div>
                        <button className="border-2 ml-80 p-1 px-3 mt-5 bg-green-600 text-white rounded-lg" type="submit">Save</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default AddAdverts;

