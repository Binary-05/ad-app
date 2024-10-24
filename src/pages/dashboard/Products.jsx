import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiGetSingleAd } from "../../services/advert";

const Products = () => {
  const [ad, setAd] = useState(null);
  const { id } = useParams();
  const [ads, setAds] = useState([]);

  const getAd = async () => {
    try {
      const response = await apiGetSingleAd();
      console.log(response);
      console.log(response.data);
      setAd(response.data);
      setAds(response.data);
    } catch (error) {
      console.error("Error fetching advert:", error);
    }
  };

  useEffect(() => {
    getAd();
  }, [id]);

  return (
    <div>
      {ad && (
        <>
          <img src={`https://savefiles.org/${ad.media}?shareable_link=436`} alt={ad.title} />
          <p>{ad.title}</p>
          <p>{ad.description}</p>
          <p>{ad.price}</p>
          <p>{ad.category}</p>
          <div>
            <button className="border-2 bg-green-700">Edit</button>
            <button className="border-2 bg-red-700">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
