/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Skeleton } from '@chakra-ui/react';
import { getCategoryItems } from '../utils/axios';

const Category = ({
  category,
  setItems,
  setEditionMode,
  currentCategory,
  setCurrentCategoryInfos,
  isDisplayedInline,
}) => {
  const manageClickOnCategory = () => {
    getCategoryItems(category.id, setItems);
    setEditionMode('Items');
    setCurrentCategoryInfos(category);
  };

  const activeBorderStyle = isDisplayedInline ? { borderBottom: '5px solid #EDA81F' } : { border: '4px solid #EDA81F' };
  const borderStyle = currentCategory === category.id ? activeBorderStyle : null;

  return (
    <Image
      src={category.imageUrl}
      alt={category.id}
      fallback={<Skeleton width={{ base: '70px', lg: '90px' }} height={{ base: '70px', lg: '90px' }} />}
      width={{ base: '70px', lg: '90px' }}
      height={{ base: '70px', lg: '90px' }}
      bgColor="#EEEEEE"
      borderRadius={{ lg: '10px' }}
      boxShadow={{ lg: '0px 5px 10px black' }}
      cursor="pointer"
      {...borderStyle}
      onClick={manageClickOnCategory}
    />
  );
};

Category.defaultProps = {
  setCurrentCategoryInfos: null,
  currentCategory: null,
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    changeColor: PropTypes.bool.isRequired,
    changePosition: PropTypes.bool.isRequired,
  }).isRequired,
  setItems: PropTypes.func.isRequired,
  setEditionMode: PropTypes.func.isRequired,
  currentCategory: PropTypes.string,
  setCurrentCategoryInfos: PropTypes.func,
  isDisplayedInline: PropTypes.bool.isRequired,
};

export default Category;
