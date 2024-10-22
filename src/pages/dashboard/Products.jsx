import { useEffect, useState } from "react";
import { apiGetAdvert } from "../../services/advert";


const Products = () => {

const [ads, setAds] = useState([]);
const getAds = async () => {
  const response = await apiGetAdvert();
  console.log(response.data)
  setAds(response.data);
}

useEffect(() => {
  getAds();
}, []);


  return (
    <div>
      <div className='pt-20 pl-56'>
        <div>
        <p>Vendor's Advertisement</p>
        </div>
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
                <p>{ad.category}</p>
                <p>{ad.pricing}</p>
              </div>
            })
          }
        </div>
        
      </div>
      
    </div>
  )
}

export default Products;