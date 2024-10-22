import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiGetAdvert } from "../../services/advert";

const ViewSingleAd = () => {
    const params = useParams()
    console.log(params)

    const AdId = params.id

    const [adDetail, setAdDetail] = useState([]);
    useEffect(() => {
        const fetchAd = async () => {
            const response = await axios.get(`${apiGetAdvert}/adverts`)
            setAdDetail(response.data)
            console.log(adDetail)
        };
        fetchAd();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="p-40">
                <div className=" p-10 border shadow-lg h-[100vh] w-10/12 rounded-sm place-self-center">
                    Content goes here
                    <div>
                        <img src={adDetail.media} alt="" />
                    </div>

                    <div>
                        <p>{adDetail.title}</p>
                        <p>{adDetail.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewSingleAd;