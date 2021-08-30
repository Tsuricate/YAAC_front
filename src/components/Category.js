import React from 'react';
import PropTypes from 'prop-types';
import { Image, Skeleton } from '@chakra-ui/react';
import { getCategoryItems } from '../utils/axios';

const Category = ({
  category, setItems, setEditionMode, setCurrentCategoryInfos,
}) => {
  const manageClickOnCategory = () => {
    getCategoryItems(category.id, setItems);
    setEditionMode('Items');
    setCurrentCategoryInfos(category);
  };

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
      onClick={manageClickOnCategory}
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: '0px 15px 25px -5px black',
        transition: 'all .3s',
      }}
    />
  );
};

Category.defaultProps = {
  setCurrentCategoryInfos: null,
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
  setCurrentCategoryInfos: PropTypes.func,
};

export default Category;
