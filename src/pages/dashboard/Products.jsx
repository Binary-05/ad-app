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
          <p className="text-[2rem] font-bold">Vendor's Products</p>
        </div>
        <div className="border-2 rounded-lg ">
          <div>
            <p>Electronics</p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 mt-5 h-[55vh]">
            {
              ads.map((ad, index) => {
                console.log(`${index}: ${ad.title}`);
                return <div key={index} className="border-2 h-[45vh] w-[15vw] pl-20 shadow-lg shadow-slate-500">
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
    </div>
  )
}

export default Products;