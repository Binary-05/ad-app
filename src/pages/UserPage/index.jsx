import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import K from "./constant";
import { apiGetAdvert } from "../../services/advert";
import { Link } from "react-router-dom";



const UserPage = () => {

  const [ads, setAds] = useState([]);
  const getAds = async () => {
    const response = await apiGetAdvert();
    setAds(response.data);
    console.log(response.data)
  }
  useEffect(() => {
    getAds();
  }, []);


  return (
    <div>
      <Navbar />
      <div>
        <div className="pt-28 ">
          <p className="text-4xl py-3 text-center">ADVERTISMENTS</p>
          <div className=" grid grid-cols-3 gap-2 p-10 border shadow-md h-fit rounded-sm mx-10">
            {
              ads.map((ad, index) => {
                console.log(`${index}: ${ad.media}`);
                return <Link to={`/adverts/${ad.id}`}>
                  <div key={index} className="border shadow-md justify-center h w-1/2 py-4 px-4">
                    <div >
                      <img src={`https://savefiles.org/${ad.media}?shareable_link=436`} alt=""  className="rounded"/>
                    </div>
                    <p className="pt-5">Title: {ad.title}</p>
                    <p className="p-1 text-2xl">Price: {ad.price}</p>
                    <p className="p-1"> Description: {ad.description}</p>
                  </div></Link>
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserPage;