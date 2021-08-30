import { CloseIcon } from '@chakra-ui/icons';
import {
  Image, SimpleGrid, Center, Skeleton, IconButton,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const ItemChoices = ({
  items, selectedItems, setSelectedItems, isMandatory,
}) => {
  const manageClickOnItem = (itemId, itemUrl) => {
    const itemCategory = itemUrl.replace(itemId, '');
    const newArray = selectedItems.filter((item) => !item.startsWith(itemCategory));
    const newSelectedItems = [...newArray, itemUrl];
    setSelectedItems(newSelectedItems);
  };

  return (
    <SimpleGrid minChildWidth={{ base: '5em', lg: '7em' }} spacing="1">
      <Center>
        <IconButton aria-label="Remove item" icon={<CloseIcon />} variant="remove-item" disabled={isMandatory} />
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
          onClick={() => manageClickOnItem(item.id, item.imageUrl)}
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
}.isRequired;

export default ItemChoices;
