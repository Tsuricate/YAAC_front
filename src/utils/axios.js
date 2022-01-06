/* eslint-disable no-console */
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { getCurrentCategoryInfo } from './functions';
import API_URL from './env.variables';

export const getDefaultItems = (setItems) => {
  axios.get(`${API_URL}/api/items/Body`)
    .then((res) => {
      setItems(res.data.categoryImages);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategories = (setCategories, setCurrentCategoryInfos) => {
  axios.get(`${API_URL}/api/categories`)
    .then((res) => {
      setCategories(res.data.categories);
      setCurrentCategoryInfos(getCurrentCategoryInfo(res.data.categories, 'body'));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategoryItems = (categoryName, setItems) => {
  axios.get(`${API_URL}/api/items/${categoryName}`)
    .then((res) => {
      setItems(res.data.categoryImages);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRandomAvatar = (setSelectedItems) => {
  axios.get(`${API_URL}/api/random`)
    .then((res) => setSelectedItems(res.data))
    .catch((error) => {
      console.log(error);
    });
};
