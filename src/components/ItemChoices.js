import {
  chakra, Icon, IconButton, Skeleton, Wrap, WrapItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import itemsThumnailTransform from '../data/itemsThumbnailTransform';
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

  const SvgLoaderWithChakra = chakra(SvgLoader);

  return (
    <Wrap width="100%" spacing="16px">
      {!isMandatory && (
      <WrapItem>
        <IconButton
          aria-label="Remove item"
          icon={<Icon as={VscChromeClose} boxSize={20} />}
          variant="remove-item"
          onClick={removeItem}
        />
      </WrapItem>
      )}
      {items.map((item) => {
        const borderStyle = isImageSelected(selectedItems, item.imageUrl) ? '4px solid #EDA81F' : 'null';
        return (
          <WrapItem
            key={item.id}
            overflow="hidden"
            fallback={<Skeleton h={{ base: '80px', lg: '100px' }} />}
            h={{ base: '80px', lg: '100px' }}
            w={{ base: '80px', lg: '100px' }}
            border={borderStyle}
            borderRadius="5px"
            boxShadow={{ lg: '0px 3px 12px #151b1f' }}
            cursor="pointer"
            onClick={() => manageClickOnItem(item)}
          >
            <SvgLoaderWithChakra
              src={item.imageUrl}
              alt={item.id}
              height="100%"
              width="100%"
              bgColor="#EEEEEE"
              transform={itemsThumnailTransform[item.category]}
            >
              <SvgProxy
                selector="#customizable"
                fill="#EEEEEE"
              />
            </SvgLoaderWithChakra>
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
