const getCurrentCategoryInfo = (categories, currentCategoryName) => (
  categories.find((category) => category.id.includes(currentCategoryName))
);

export default getCurrentCategoryInfo;
