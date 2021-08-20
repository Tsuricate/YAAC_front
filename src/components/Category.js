import React from 'react';
import PropTypes from 'prop-types';
import { Image, Skeleton } from '@chakra-ui/react';
import { getCategoryItems } from '../utils/axios';

const Category = ({
  category, setItems, setChangeColor, setChangePosition, setEditionMode,
}) => {
  // eslint-disable-next-line react/prop-types
  const categoryName = category.id.substr(3).slice(0, -4);

  const manageClickOnCategory = () => {
    getCategoryItems(categoryName, setItems);
    setChangeColor(category.changeColor);
    setChangePosition(category.changePosition);
    setEditionMode('Items');
  };

  return (
    <Image
      src={category.imageUrl}
      alt={categoryName}
      fallback={<Skeleton width={{ base: '70px', lg: '100px' }} height={{ base: '70px', lg: '100px' }} />}
      width={{ base: '70px', lg: '100px' }}
      height={{ base: '70px', lg: '100px' }}
      bgColor="snow"
      borderRadius={{ lg: '10px' }}
      boxShadow={{ lg: '0px 5px 10px black' }}
      cursor="pointer"
      onClick={manageClickOnCategory}
      _hover={{
        transform: 'scale(1.03)',
        boxShadow: '0px 15px 25px -5px black',
        transition: 'all .3s',
      }}
    />
  );
};

Category.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      changeColor: PropTypes.bool.isRequired,
      changePosition: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  setItems: PropTypes.func.isRequired,
  setChangeColor: PropTypes.func.isRequired,
  setChangePosition: PropTypes.func.isRequired,
  setEditionMode: PropTypes.func.isRequired,
};

export default Category;
