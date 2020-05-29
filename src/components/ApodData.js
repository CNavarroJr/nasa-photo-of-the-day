import React, { useEffect, useState } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

const ApodData = () => {

const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

    .then(response => {

      setPhoto(response.data)
      console.log("response", response.data)
      
    })
    .catch(error => console.log("Error!", error));
    
  }, []);

 return (
   <div>
      <NasaCard photo={photo}/>
   </div>
 )
    
};

export default ApodData;