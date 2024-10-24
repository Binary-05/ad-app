import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { apiGetSingleAdvert } from "../../services/advert";
import { useParams } from "react-router-dom";

const ViewSingleAd = () => {
    // const [ads, setAds] = useState([]);
    // const getAds = async () => {
    //     const response = await apiGetAdvert();
    //     console.log(response.data)
    //     setAds(response.data);
    // }
    // useEffect(() => {
    //     getAds();
    // }, []);

    const params = useParams()
    const adId = params.id

    //declare state to store ads
    const [ad, setAd] = useState();

    useEffect(() => {
        const fetchAd = async () => {
            const response = await apiGetSingleAdvert(adId);
            setAd(response.data)
            console.log(response.data)
        };
        fetchAd();
    }, [adId]);

    return (
        <div>
            <Navbar />
            <div className="p-40">

                <div className=" p-10 border shadow-lg h-5/6 w-10/12 rounded-sm place-self-center">

                    <div className="flex gap-10 border">
                        <div className="h-48 w-4/5 pt-2 ">
                            <img src={`https://savefiles.org/${ad?.media}?shareable_link=436`} alt="" />
                        </div>

                        <div>
                            <p className="text-xl pt-5">Product: {ad?.title}</p>
                            <p className="text-2xl font-bold pt-2"> Price: {ad?.price}</p>
                            <p className="text-xl pt-2"> Description: {ad?.description}</p>
                            <p className="text-xl pt-2"> Category: {ad?.category}</p>
                            <p className="text-xl pt-2">Description: {ad?.description}</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ViewSingleAd;