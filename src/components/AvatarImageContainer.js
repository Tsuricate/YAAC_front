import React from 'react';
import PropTypes from 'prop-types';
import { chakra } from '@chakra-ui/react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import customizableItemsMapping from '../data/customizableItemsMapping';

const AvatarImageContainer = ({
  imageUrl,
  itemColor,
  currentCategoryName,
  itemsPosition,
}) => {
  const SvgLoaderWithChakra = chakra(SvgLoader);

  return (
    <SvgLoaderWithChakra
      path={imageUrl}
      width="100%"
      height="auto"
      position="absolute"
      bottom={`${itemsPosition.directionY}em`}
      right={`${itemsPosition.directionX}em`}
    >
      <SvgProxy
        selector={`#${customizableItemsMapping[currentCategoryName]}`}
        fill={itemColor[currentCategoryName]}
      />
    </SvgLoaderWithChakra>
  );
};

AvatarImageContainer.defaultProps = {
  itemsPosition: { directionX: 0, directionY: 0 },
};

AvatarImageContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  itemColor: PropTypes.objectOf(PropTypes.string).isRequired,
  currentCategoryName: PropTypes.string.isRequired,
  itemsPosition: PropTypes.objectOf(PropTypes.number.isRequired),
};

const MemoizedAvatarImageContainer = React.memo(AvatarImageContainer);
export default MemoizedAvatarImageContainer;
