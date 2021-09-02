import { CloseIcon } from '@chakra-ui/icons';
import {
  Image, SimpleGrid, Center, Skeleton, IconButton,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteCategoryItems } from '../utils/functions';

const ItemChoices = ({
  items, selectedItems, setSelectedItems, isMandatory, currentCategoryName,
}) => {
  const manageClickOnItem = (item) => {
    const newArray = deleteCategoryItems(selectedItems, currentCategoryName);
    const newSelectedItems = [...newArray, item];
    setSelectedItems(newSelectedItems);
  };

  const removeItem = () => {
    const newArray = deleteCategoryItems(selectedItems, currentCategoryName);
    setSelectedItems(newArray);
  };

  return (
    <SimpleGrid minChildWidth={{ base: '5em', lg: '7em' }} spacing="1">
      <Center>
        <IconButton
          aria-label="Remove item"
          icon={<CloseIcon />}
          variant="remove-item"
          disabled={isMandatory}
          onClick={removeItem}
        />
      </Center>
      {items.map((item) => (
        <Image
          src={item.imageUrl}
          alt={item.id}
          key={item.id}
          fallback={<Skeleton h={{ base: '5em', lg: '7em' }} />}
          h={{ base: '5em', lg: '7em' }}
          bgColor="snow"
          border={selectedItems.includes(item.imageUrl) ? '4px solid #3bad98' : 'null'}
          borderRadius="5px"
          boxShadow={{ lg: '0px 3px 12px #151b1f' }}
          cursor="pointer"
          onClick={() => manageClickOnItem(item)}
        />
      ))}
    </SimpleGrid>
  );
};

ItemChoices.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isMandatory: PropTypes.bool.isRequired,
  currentCategoryName: PropTypes.string.isRequired,
}.isRequired;

export default ItemChoices;
