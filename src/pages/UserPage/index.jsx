import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import K from "./constant";
import { apiGetAdvert } from "../../services/advert";
import axios from "axios";



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
      <div className="">
        <div className="pt-16">
          <p>FEATURED PRODUCTS</p>
          <div>
            {
              ads.map((ad, index) => {
                console.log(`${index}: ${ad.title}`);
                return <div key={index}>
                  <div>
                    <img src={ad.media} alt="" />
                  </div>
                  <p>{ad.title}</p>
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