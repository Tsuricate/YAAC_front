import React from 'react';
import PropTypes from 'prop-types';
import { SimpleGrid, Stack, useBreakpointValue } from '@chakra-ui/react';
import Category from './Category';

const MainCategories = ({
  categories, setItems, setEditionMode, currentCategory, setCurrentCategoryInfos,
}) => {
  const isDisplayedInline = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      {isDisplayedInline
        ? (
          <Stack direction="row" justify="flex-start" overflowX="auto" wrap={{ lg: 'wrap' }} spacing={0}>
            {categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                setItems={setItems}
                setEditionMode={setEditionMode}
                setCurrentCategoryInfos={setCurrentCategoryInfos}
              />
            ))}
          </Stack>
        )
        : (
          <SimpleGrid minChildWidth="100px" spacing="14px">
            {categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                setItems={setItems}
                setEditionMode={setEditionMode}
                currentCategory={currentCategory}
                setCurrentCategoryInfos={setCurrentCategoryInfos}
              />
            ))}
          </SimpleGrid>
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
