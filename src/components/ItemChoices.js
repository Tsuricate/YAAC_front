import {
  chakra, Icon, IconButton, Skeleton, Wrap, WrapItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import itemsThumnailTransform from '../data/itemsThumbnailTransform';
import { itemChoicesAnimation, removeItemButtonAnimation } from '../utils/animations';
import API_URL from '../utils/env.variables';
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
      <WrapItem animation={`${removeItemButtonAnimation} 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) both`}>
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
            fallback={<Skeleton h={{ base: '75px', lg: '100px' }} />}
            h={{ base: '75px', lg: '100px' }}
            w={{ base: '75px', lg: '100px' }}
            border={borderStyle}
            borderRadius="5px"
            boxShadow={{ lg: '0px 3px 12px #151b1f' }}
            cursor="pointer"
            animation={`${itemChoicesAnimation} 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both`}
            onClick={() => manageClickOnItem(item)}
          >
            <SvgLoaderWithChakra
              src={`${API_URL}${item.imageUrl}`}
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

ItemChoices.defaultProps = {
  isMandatory: true,
  currentCategoryName: 'body',
};

ItemChoices.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isMandatory: PropTypes.bool,
  currentCategoryName: PropTypes.string,
  selectedItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
};

export default ItemChoices;
