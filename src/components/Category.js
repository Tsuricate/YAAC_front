import React from 'react';
import { Image } from '@chakra-ui/react';

const Category = ({ label, image }) => { 
  return (
      <Image 
      src={image} 
      alt={label} 
      width={{base: "70px", lg: "100px"}}
      height={{base: "70px", lg: "100px"}}
      border={{lg: "3px solid transparent"}}
    /> 
  )
}

export default Category;
