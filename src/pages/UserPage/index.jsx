import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import K from "./constant";
import { apiGetAdvert } from "../../services/advert";




const UserPage = () => {

  const [ads, setAds] = useState([]);
  const getAds = async () => {
    const response = await apiGetAdvert();
    setAds(response.data);
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
          <div className=" grid grid-cols-3 gap-4 p-10 border shadow-md h-96 rounded-sm mx-10">
            {
              ads.map((ad, index) => {
                console.log(`${index}: ${ad.media}`);
                return <div key={index} className="border shadow-sm justify-center ">
                  <div >
                    <img src={`https://savefiles.org/${ad.media}?shareable_link=436`} alt="" />
                  </div>
                  <p>{ad.title}</p>
                  <p>{ad.price}</p>
                  <p>{ad.description}</p>
                </div>
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