import { mainColors, bodyColors, gradientColors } from '../data/colors';

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
