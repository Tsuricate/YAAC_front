/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Center } from '@chakra-ui/react';
import ActionButtons from './ActionButtons';
import AvatarImageContainer from './AvatarImageContainer';

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
    bg: backgroundColor, width: '100%', height: '100%', borderRadius: { lg: '10px' }, boxShadow: { lg: '10px 10px 20px dimgrey' }, border: { lg: 'thick double grey' },
  };

  return (
    <Box w="100vw" h="100vw" maxHeight={{ md: '50vh', lg: '80vh' }} maxWidth={{ md: '50vh', lg: '70vh' }} position="relative">
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
