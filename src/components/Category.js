import React from 'react';
import { Image } from '@chakra-ui/react';

const Category = ({ label, image }) => { 
  return (
    <Image 
      src={image} 
      alt={label} 
      maxWidth="100%"
      height="auto"
      border="2px solid DarkSeaGreen"
      boxSize={{lg:"6em"}}
      mx={{lg: "0.5"}}
      mb={{lg: "1"}}
    />
  )
}

export default Category;
