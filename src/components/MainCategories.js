import React from 'react';
import Category from '../components/Category';
import { Flex } from "@chakra-ui/react"
import { fakeMainCategories } from '../data/fakeData';

const MainCategories = () => {
  return (
    <Flex overflowX="auto" wrap={{base: "nowrap", lg: "wrap"}} mb={{lg: "6"}}>
      {fakeMainCategories.map((category) => (
        <Category key={category.id} {...category}/>
      ))}
    </Flex>
  );
};

export default MainCategories;
