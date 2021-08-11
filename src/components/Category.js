import React from 'react';
import { Image, Skeleton } from '@chakra-ui/react';
import { getCategoryItems } from '../utils/axios';

const Category = ({ id, imageUrl, setItems }) => { 

  let categoryName = id.substr(3).slice(0, -4);

  const manageClickOnCategory = () => {
    getCategoryItems(categoryName, setItems);
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
