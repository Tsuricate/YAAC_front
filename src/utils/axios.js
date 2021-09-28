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

export const getMergedAvatar = (selectedItems) => {
  const imagesUrl = selectedItems.map((item) => item.imageUrl);
  axios.post('http://localhost:3001/api/merge', {
    imagesUrl,
  })
    // eslint-disable-next-line no-unused-vars
    .then((response) => {
      // Response contains the avatar in base64 format
      const linkSource = response.data.avatar;
      // A fake link is created and clicked to start the download.
      // Due to the use of JS to make the request, it's its job to handle the download trigger
      // See : https://medium.com/@drevets/you-cant-prompt-a-file-download-with-the-content-disposition-header-using-axios-xhr-sorry-56577aa706d6
      const link = document.createElement('a');
      link.href = linkSource;
      link.setAttribute('download', 'avatar.png');
      link.click();
      // console.log('ALRIGHT !');
    })
    .catch((error) => {
      console.log(error);
    });
};
