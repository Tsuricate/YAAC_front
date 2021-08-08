import React from 'react';
import axios from 'axios';
import { Image } from '@chakra-ui/react';

const Category = ({ id, imageUrl, setItems }) => { 

  let imageName = id.replace(/\.[^/.]+$/, "");

  const manageClickOnImage = (imageName) => {
    axios.get(`http://localhost:3001/api/items/${imageName}`)
      .then((res) => {
          setItems(res.data.categoryImages);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
      <Image 
      src={imageUrl} 
      alt={imageName} 
      width={{base: "70px", lg: "100px"}}
      height={{base: "70px", lg: "100px"}}
      border={{lg: "1px solid black"}}
      onClick={() => manageClickOnImage(imageName)}
    /> 
  )
}

export default Category;
