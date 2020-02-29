import React, { useState, useEffect } from "react";
// import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    setIsLoading(true);
   setTimeout(() => {
    axiosWithAuth()
            .get('colors')
            .then(response => {
                console.log(response.data);
                setColorList(response.data);
                setUpdate(false);
                setIsLoading(false);
            }) 
             .catch(error => {
                console.log(`Error fetching colors, ${error.response}`);
                setIsLoading(false);
            });
        }, 2000);
 }, [update]);

  return (
    <>
       { update ? "LOADING" : ""} 
      <ColorList 
      colors={colorList} 
      updateColors={setColorList}
      update={setUpdate} 
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
