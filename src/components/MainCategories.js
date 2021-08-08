import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../components/Category';
import { Stack } from "@chakra-ui/react"

const MainCategories = ({ setItems }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/categories")
      .then((res) => {
          setCategories(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <Stack direction="row" justify="flex-start" overflowX="auto" wrap={{lg: "wrap"}} spacing={0} mb={{lg: 4}}>
      {categories.map((category) => (
        <Category key={category.id} {...category} setItems={setItems} />
      ))}
    </Stack>
  );
};

export default MainCategories;
