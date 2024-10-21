import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

const ViewSingleAd = () => {
    // const params = useParams()
    // console.log (params)

    // const AdId = params. id

    // const[adDetail, setAdDetail] useState([]);
    // useEffect(() => {
    //     const fetchAd = async() =>{
    //         const response = await axios.get (`${BASE_URL}/ads/ ${AdId}`)
    //         setAdDetail(response.data)
    //         console.log (adDetail)
    //     };
    //     fetchAd();
    // },[]);

    return (
        <div>
            <Navbar />
            <div className="p-40">
                <div className=" p-10 border shadow-lg h-[100vh] w-10/12 rounded-sm place-self-center">
                    Content goes here
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewSingleAd;