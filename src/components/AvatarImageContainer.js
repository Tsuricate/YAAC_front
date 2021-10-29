import React from 'react';
import PropTypes from 'prop-types';
import { chakra } from '@chakra-ui/react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import { fullAvatarAnimation } from '../utils/animations';

const AvatarImageContainer = ({
  imageUrl,
  itemColor,
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
      animation={`${fullAvatarAnimation} 0.2s ease forwards`}
    >
      <SvgProxy
        selector="#customizable"
        fill={itemColor}
      />
    </SvgLoaderWithChakra>
  );
};

AvatarImageContainer.defaultProps = {
  itemsPosition: { directionX: 0, directionY: 0 },
  itemColor: 'transparent',
};

AvatarImageContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  itemColor: PropTypes.string,
  itemsPosition: PropTypes.objectOf(PropTypes.number.isRequired),
};

const MemoizedAvatarImageContainer = React.memo(AvatarImageContainer);
export default MemoizedAvatarImageContainer;
