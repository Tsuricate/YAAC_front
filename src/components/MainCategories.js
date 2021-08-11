import React from 'react';
import Category from '../components/Category';
import { Stack } from "@chakra-ui/react"

const MainCategories = ({ categories, setItems }) => {

  return (
    <Stack direction="row" justify="flex-start" overflowX="auto" wrap={{lg: "wrap"}} spacing={0} mb={{lg: 4}}>
      {categories.map((category) => (
        <Category key={category.id} {...category} setItems={setItems} />
      ))}
    </Stack>
  );
};

export default MainCategories;
