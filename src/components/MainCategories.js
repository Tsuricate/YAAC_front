import {
  Stack, useBreakpointValue, Wrap, WrapItem, IconButton, Icon,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { IoDiceOutline } from 'react-icons/io5';
import Category from './Category';
import { getCategories } from '../utils/axios';

const MainCategories = ({
  setItems, setEditionMode, currentCategory, setCurrentCategoryInfos,
}) => {
  const [categories, setCategories] = useState([]);
  const isDisplayedInline = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    getCategories(setCategories, setCurrentCategoryInfos);
  }, []);

  const getRandomAvatar = () => {
    console.log('Random !');
  };

  return (
    <>
      {isDisplayedInline
        ? (

          <Stack direction="row" justify="flex-start" overflowX="auto" spacing={3}>
            <IconButton
              aria-label="random-avatar"
              icon={<Icon as={IoDiceOutline} boxSize={16} />}
              minWidth={{ base: '70px', lg: '90px' }}
              height="70px"
              onClick={getRandomAvatar}
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
              <IconButton
                aria-label="random-avatar"
                icon={<Icon as={IoDiceOutline} boxSize={16} />}
                width={{ base: '70px', lg: '90px' }}
                height={{ base: '70px', lg: '90px' }}
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
};

const MemoizedMainCategories = React.memo(MainCategories);
export default MemoizedMainCategories;
