import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { getCurrentCategoryInfo } from './functions';

export const getDefaultItems = (setItems) => {
  axios.get('https://yaac-back.vercel.app/api/items/Body')
    .then((res) => {
      setItems(res.data.categoryImages);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategories = (setCategories, setCurrentCategoryInfos) => {
  axios.get('https://yaac-back.vercel.app/api/categories')
    .then((res) => {
      setCategories(res.data.categories);
      setCurrentCategoryInfos(getCurrentCategoryInfo(res.data.categories, 'body'));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategoryItems = (categoryName, setItems) => {
  axios.get(`https://yaac-back.vercel.app/api/items/${categoryName}`)
    .then((res) => {
      setItems(res.data.categoryImages);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRandomAvatar = (setSelectedItems) => {
  axios.get('https://yaac-back.vercel.app/api/random')
    .then((res) => setSelectedItems(res.data))
    .catch((error) => {
      console.log(error);
    });
};
