import axios from 'axios';
import { getCurrentCategoryInfo } from './functions';

export const getDefaultItems = (setItems) => {
  axios.get('http://localhost:3001/api/items/Body')
    .then((res) => {
      setItems(res.data.categoryImages);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategories = (setCategories, setCurrentCategoryInfos) => {
  axios.get('http://localhost:3001/api/categories')
    .then((res) => {
      setCategories(res.data.categories);
      setCurrentCategoryInfos(getCurrentCategoryInfo(res.data.categories, 'body'));
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

export const getRandomAvatar = (setSelectedItems) => {
  axios.get('http://localhost:3001/api/random')
    .then((res) => setSelectedItems(res.data))
    .catch((error) => {
      console.log(error);
    });
};
