// import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import K from './constant';


// const adlists = () =>{
//   const [ads, setAds]= useState([]);
//   const getAds = async () => {
// const response = await axios.get (`${BASE_URL}/ads`);
// setAds(response.data);
//   }


// useEffect(() => {
//   getAds();
// }, []);


// };


const UserPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        {
          K.ADLISTS.map((ad, index) => {
            console.log (ad);
            return (
              <div key = {index}>
                {/* <p>{ad.media}</p>
                <p>{ad.price}</p>
                <p>{ad.title}</p>
                <p>{ad.description}</p>
                <p>{ad.category}</p> */}
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
};

export default UserPage;