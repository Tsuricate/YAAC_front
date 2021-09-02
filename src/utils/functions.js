export const getCurrentCategoryInfo = (categories, currentCategoryName) => (
  categories.find((category) => category.id.includes(currentCategoryName))
);

export const deleteCategoryItems = (selectedItems, currentCategoryName) => {
  console.log('currentCategoryName : ', currentCategoryName);
  return (
    selectedItems.filter((selectedItem) => selectedItem.category !== currentCategoryName)
  );
};
