/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center } from '@chakra-ui/react';
import ActionButtons from './ActionButtons';
import AvatarImageContainer from './AvatarImageContainer';
// import avatarBorder from '../assets/avatarBorder.svg';

const AvatarScreen = ({
  setEditionMode,
  backgroundColor,
  selectedItems,
  changeColor,
  changePosition,
  itemColor,
  currentCategoryName,
  itemsPosition,
}) => {
  const boxStyle = {
    bg: backgroundColor, width: '100%', height: '100%', borderRadius: { lg: '10px' }, position: 'absolute', bottom: '-13px',
  };

  return (
    <Box
      height={{ base: '100vw', md: '50vh', lg: '80vh' }}
      width={{ base: '100vw', md: '50vh', lg: '70vh' }}
      position="relative"
    >
      <Box position="absolute" style={{ border: '10px solid', borderImage: 'url(avatarBorder.svg) 38% / 11 / 3 stretch' }} zIndex="1" width="100%" height="100%" />
      <Box {...boxStyle}>
        <Center>
          {selectedItems.map((item) => (
            <AvatarImageContainer
              key={item.id}
              imageUrl={item.imageUrl}
              itemColor={itemColor}
              currentCategoryName={currentCategoryName}
              itemsPosition={itemsPosition[item.category]}
            />
          ))}
        </Center>
      </Box>
      <Box position="absolute" bottom={{ base: 2, lg: 4 }} width="100%" px={{ base: 2, lg: 4 }}>
        <ActionButtons
          setEditionMode={setEditionMode}
          changeColor={changeColor}
          changePosition={changePosition}
        />
      </Box>

    </Box>
  );
};

AvatarScreen.defaultProps = {
  changeColor: false,
  changePosition: false,
  currentCategoryName: 'body',
};

AvatarScreen.propTypes = {
  setEditionMode: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  changeColor: PropTypes.bool,
  changePosition: PropTypes.bool,
  itemColor: PropTypes.objectOf(PropTypes.string).isRequired,
  currentCategoryName: PropTypes.string,
  itemsPosition: PropTypes.objectOf(PropTypes.shape({
    directionX: PropTypes.number.isRequired,
    directionY: PropTypes.number.isRequired,
  })).isRequired,
};

export default AvatarScreen;
