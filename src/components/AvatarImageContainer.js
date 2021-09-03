import React from 'react';
import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import { Image } from '@chakra-ui/react';
import customizableItemsMapping from '../data/customizableItemsMapping';

const AvatarImageContainer = ({
  imageUrl, itemColor, currentCategoryName, itemsPosition,
}) => (
  imageUrl.includes('svg')
    ? (
      <SvgLoader path={imageUrl} position="absolute" bottom="0">
        <SvgProxy
          selector={`#${customizableItemsMapping[currentCategoryName]}`}
          fill={itemColor[currentCategoryName]}
        />
      </SvgLoader>
    )
    : <Image src={imageUrl} maxW="100%" maxH="100%" position="absolute" bottom={`${itemsPosition.directionY}em`} right={`${itemsPosition.directionX}em`} />
);

AvatarImageContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  itemColor: PropTypes.objectOf(PropTypes.string).isRequired,
  currentCategoryName: PropTypes.string.isRequired,
  itemsPosition: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default AvatarImageContainer;
