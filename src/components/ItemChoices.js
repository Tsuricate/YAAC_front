import { VscChromeClose } from 'react-icons/vsc';
import {
  Image, SimpleGrid, Skeleton, IconButton, Icon,
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
      {isMandatory && (
      <IconButton
        aria-label="Remove item"
        icon={<Icon as={VscChromeClose} boxSize={20} />}
        variant="remove-item"
        onClick={removeItem}
      />
      )}

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
