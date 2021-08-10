import React from 'react';
import axios from 'axios';
import { Image, Skeleton } from '@chakra-ui/react';

const Category = ({ id, imageUrl, setItems }) => { 

  let categoryName = id.substr(3).slice(0, -4);

  const manageClickOnCategory = () => {
    axios.get(`http://localhost:3001/api/items/${categoryName}`)
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
        alt={categoryName}
        fallback={<Skeleton width={{base: "70px", lg: "100px"}} height={{base: "70px", lg: "100px"}} />}
        width={{base: "70px", lg: "100px"}}
        height={{base: "70px", lg: "100px"}}
        border={{lg: "1px solid black"}}
        onClick={manageClickOnCategory}
    /> 
  )
}

export default Category;
