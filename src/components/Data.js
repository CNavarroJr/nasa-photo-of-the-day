import React, { useEffect, useState } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

const Data = () => {

const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      console.log(response.data);
      setData(response.data)
    })
    .catch(error => {
      console.log("Error!", error);
    })
  }, []);

  return 
    
};

export default Data;