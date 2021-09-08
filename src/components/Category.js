import React from 'react';
import PropTypes from 'prop-types';
import { Image, Skeleton } from '@chakra-ui/react';
import { getCategoryItems } from '../utils/axios';

const Category = ({
  category, setItems, setEditionMode, currentCategory, setCurrentCategoryInfos,
}) => {
  const manageClickOnCategory = () => {
    getCategoryItems(category.id, setItems);
    setEditionMode('Items');
    setCurrentCategoryInfos(category);
  };

  const borderStyle = currentCategory === category.id ? '4px solid #3bad98' : 'null';

  return (
    <Image
      src={category.imageUrl}
      alt={category.id}
      fallback={<Skeleton width={{ base: '70px', lg: '100px' }} height={{ base: '70px', lg: '100px' }} />}
      width={{ base: '70px', lg: '100px' }}
      height={{ base: '70px', lg: '100px' }}
      bgColor="snow"
      borderRadius={{ lg: '10px' }}
      boxShadow={{ lg: '0px 5px 10px black' }}
      cursor="pointer"
      border={borderStyle}
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
};

export default Category;
