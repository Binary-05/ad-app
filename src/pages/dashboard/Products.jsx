import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiDeleteAdverts, apiGetSingleAd } from "../../services/advert";

const Products = () => {
  const [ad, setAd] = useState(null);
  const { id } = useParams();
  const [ads, setAds] = useState([]);

  const getAd = async () => {
    try {
      const response = await apiGetSingleAd(id);
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


const handleDelete = async (id) => {
  try {
    const res = await apiDeleteAdverts(`adverts/${id}`)
  } catch (error) {
    console.log("Error deleting advert", error)
  }
}

  return (
    <div className="h-[130vh]">
      <div className="flex flex-col ml-80 mt-20 h-[100vh] p-10 border shadow-lg w-[40vw]  rounded-sm place-self-center">
      {ad && (
        <>
          <img src={`https://savefiles.org/${ad.media}?shareable_link=436`} alt={ad.title} className=" pt-2 "/>
          <p className="pb-3">{ad.title}</p>
          <p className="pb-3">{ad.description}</p>
          <p className="pb-3">{ad.price}</p>
          <p className="pb-3">{ad.category}</p>
          <div>
            <Link to="/edit" className="border-2 bg-green-700  p-2 px-3 rounded-lg">Edit</Link>
            <button onClick={() => handleDelete(ad.id)} className="border-2 p-2 px-3 rounded-lg ml-10 bg-red-700">Delete</button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Products;
