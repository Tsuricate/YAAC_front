import axios from 'axios';

export const getDefaultItems = (setItems) => {
  axios.get('http://localhost:3001/api/items/Body')
    .then((res) => {
      setItems(res.data.categoryImages);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategories = (setCategories) => {
  axios.get('http://localhost:3001/api/categories')
    .then((res) => {
      setCategories(res.data.categories);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategoryItems = (categoryName, setItems) => {
  axios.get(`http://localhost:3001/api/items/${categoryName}`)
    .then((res) => {
      setItems(res.data.categoryImages);
    })
    .catch((error) => {
      console.log(error);
    });
};
