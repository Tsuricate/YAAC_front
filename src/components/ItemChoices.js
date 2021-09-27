import { VscChromeClose } from 'react-icons/vsc';
import {
  Image, Wrap, Skeleton, IconButton, Icon, WrapItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { deleteCategoryItems, isImageSelected } from '../utils/functions';

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
    <Wrap width="100%" spacing="16px">
      <WrapItem>
        {isMandatory && (
        <IconButton
          aria-label="Remove item"
          icon={<Icon as={VscChromeClose} boxSize={20} />}
          variant="remove-item"
          onClick={removeItem}
        />
        )}
      </WrapItem>
      {items.map((item) => {
        const borderStyle = isImageSelected(selectedItems, item.imageUrl) ? '4px solid #EDA81F' : 'null';
        return (
          <WrapItem key={item.id}>
            <Image
              src={item.imageUrl}
              alt={item.id}
              fallback={<Skeleton h={{ base: '80px', lg: '100px' }} />}
              h={{ base: '80px', lg: '100px' }}
              bgColor="#EEEEEE"
              border={borderStyle}
              borderRadius="5px"
              boxShadow={{ lg: '0px 3px 12px #151b1f' }}
              cursor="pointer"
              onClick={() => manageClickOnItem(item)}
            />
          </WrapItem>

        );
      })}
    </Wrap>
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
