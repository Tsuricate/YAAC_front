import React from 'react';
import Category from '../components/Category';
import { Stack } from "@chakra-ui/react"
import { fakeMainCategories } from '../data/fakeMainCategories';

const MainCategories = () => {
  return (
    <Stack direction="row" justify="flex-start" overflowX="auto" wrap={{lg: "wrap"}} spacing={0} mb={{lg: 4}}>
      {fakeMainCategories.map((category, index) => (
        <Category key={category.id} {...category} />
      ))}
    </Stack>
  );
};

export default MainCategories;
