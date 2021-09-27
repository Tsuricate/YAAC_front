import {
  Stack, useBreakpointValue, Wrap, WrapItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import Category from './Category';

const MainCategories = ({
  categories, setItems, setEditionMode, currentCategory, setCurrentCategoryInfos,
}) => {
  const isDisplayedInline = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      {isDisplayedInline
        ? (
          <Stack direction="row" justify="flex-start" overflowX="auto" wrap={{ lg: 'wrap' }} spacing={3}>
            {categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                isDisplayedInline={isDisplayedInline}
                setItems={setItems}
                setEditionMode={setEditionMode}
                currentCategory={currentCategory}
                setCurrentCategoryInfos={setCurrentCategoryInfos}
              />
            ))}
          </Stack>
        )
        : (
          <Wrap spacing="10px" width="100%" overflow="hidden">
            {categories.map((category) => (
              <WrapItem key={category.id}>
                <Category
                  category={category}
                  isDisplayedInline={isDisplayedInline}
                  setItems={setItems}
                  setEditionMode={setEditionMode}
                  currentCategory={currentCategory}
                  setCurrentCategoryInfos={setCurrentCategoryInfos}
                />
              </WrapItem>

            ))}
          </Wrap>
        )}
    </>
  );
};

MainCategories.defaultProps = {
  currentCategory: null,
};

MainCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  setItems: PropTypes.func.isRequired,
  setEditionMode: PropTypes.func.isRequired,
  currentCategory: PropTypes.string,
  setCurrentCategoryInfos: PropTypes.func.isRequired,
};

export default MainCategories;
