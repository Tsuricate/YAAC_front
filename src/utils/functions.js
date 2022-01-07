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

export const getTourSteps = (currentCategoryName) => (
  [
    {
      target: '.tour-categories',
      content: `You can chose here which category you want to modify. Let's take "${currentCategoryName}" for this example !`,
      disableBeacon: true,
    },
    {
      target: '.tour-items',
      content: `Here are all the different "${currentCategoryName}" designs available. Some categories are mandatory, but some others -like accessories- are deletable.`,
    },
    {
      target: '.tour-avatar-screen',
      content: 'Here\'s your canvas. You can see your Avatar with all your current choices.',
      placement: 'right',
    },
    {
      target: '.tour-avatar-customization',
      content: 'Some items allows you to customize their color and/or their position.',
    },
    {
      target: '.tour-random',
      content: 'Feeling lucky ? You can generate a random avatar by clicking on the dice anytime.',
    },
    {
      target: '.tour-avatar-download',
      content: 'Satisfied with how your avatar is looking ? Download it and use it anywhere you want !',
    },
  ]
);
