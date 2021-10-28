import { mainColors, bodyColors, gradientColors } from '../data/colors';
// eslint-disable-next-line import/no-cycle
import { getRandomAvatar } from './axios';

export const getCurrentCategoryInfo = (categories, currentCategoryName) => (
  categories.find((category) => category.id.includes(currentCategoryName))
);

export const deleteCategoryItems = (selectedItems, currentCategoryName) => (
  selectedItems.filter((selectedItem) => selectedItem.category !== currentCategoryName)
);

export const isImageSelected = (selectedItems, imageUrl) => (
  selectedItems.find((selectedItem) => selectedItem.imageUrl === imageUrl)
);

export const getColourPaletteForCategory = (currentCategoryName) => {
  if (currentCategoryName === 'background-color') {
    return [...mainColors, ...gradientColors];
  }
  if (currentCategoryName === 'body') {
    return bodyColors;
  }
  return mainColors;
};

export const getRandomColorForCategory = (category) => {
  const colorPalette = getColourPaletteForCategory(category);
  const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  return randomColor;
};

export const getRandomColorForItems = (categories) => {
  const customizableCategories = categories.filter(
    (category) => category.changeColor,
  ).map((category) => category.id);

  return Object.assign({}, ...customizableCategories.map((category) => (
    { [category]: getRandomColorForCategory(category) }
  )));
};

export const composeRandomAvatar = (
  setSelectedItems,
  setBackgroundColor,
  setItemColor,
  categories,
) => {
  getRandomAvatar(setSelectedItems);
  setBackgroundColor(getRandomColorForCategory('background-color'));
  setItemColor(getRandomColorForItems(categories));
};
