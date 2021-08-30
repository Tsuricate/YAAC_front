export const getCurrentCategoryInfo = (categories, currentCategoryName) => (
  categories.find((category) => category.id.includes(currentCategoryName))
);

export const deleteCategoryItems = (selectedItems, currentCategoryName) => (
  selectedItems.filter((selectedItem) => !selectedItem.includes(currentCategoryName))
);
