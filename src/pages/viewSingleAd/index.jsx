import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { apiGetAdvert } from "../../services/advert";
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
    console.log(params)
    const AdId = params.id

    //declare state to store ads
    const [ad, setAd] = useState([]);

    useEffect(() => {
        const fetchAd = async () => {
            const response = await apiGetAdvert(AdId);
            setAd(response.data)
            console.log(ad)
        };
        fetchAd();
    }, [AdId]);

    return (
        <div>
            <Navbar />
            <div className="p-40">

                <div key={AdId} className=" p-10 border shadow-lg h-[100vh] w-10/12 rounded-sm place-self-center">
                    Content goes here
                    <div>
                        <img src={`https://savefiles.org/${ad.media}?shareable_link=436`} alt="" />
                    </div>

                    <div>
                        <p>{ad.title}</p>
                        <p>{ad.description}</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ViewSingleAd;