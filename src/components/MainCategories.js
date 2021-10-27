import {
  Stack, useBreakpointValue, Wrap, WrapItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RandomAvatarButton from './RandomAvatarButton';
import Category from './Category';
import { getCategories } from '../utils/axios';

const MainCategories = ({
  setItems,
  setEditionMode,
  currentCategory,
  setCurrentCategoryInfos,
  setSelectedItems,
  setBackgroundColor,
}) => {
  const [categories, setCategories] = useState([]);
  const isDisplayedInline = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    getCategories(setCategories, setCurrentCategoryInfos);
  }, []);

  return (
    <>
      {isDisplayedInline
        ? (

          <Stack direction="row" justify="flex-start" overflowX="auto" spacing={3}>
            <RandomAvatarButton
              setSelectedItems={setSelectedItems}
              setBackgroundColor={setBackgroundColor}
            />
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
            <WrapItem>
              <RandomAvatarButton
                setSelectedItems={setSelectedItems}
                setBackgroundColor={setBackgroundColor}
              />
            </WrapItem>

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
  setItems: PropTypes.func.isRequired,
  setEditionMode: PropTypes.func.isRequired,
  currentCategory: PropTypes.string,
  setCurrentCategoryInfos: PropTypes.func.isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  setBackgroundColor: PropTypes.func.isRequired,
};

const MemoizedMainCategories = React.memo(MainCategories);
export default MemoizedMainCategories;
