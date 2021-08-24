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
  currentCategory,
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
              key={item}
              bodyPart={item}
              itemColor={itemColor}
              currentCategory={currentCategory}
            />
          ))}
        </Center>
      </Box>

      <Box position="absolute" bottom="4" width="100%" px="3">
        <ActionButtons
          setEditionMode={setEditionMode}
          changeColor={changeColor}
          changePosition={changePosition}
        />
      </Box>

    </Box>
  );
};

AvatarScreen.propTypes = {
  setEditionMode: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  selectedItems: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  changeColor: PropTypes.bool.isRequired,
  changePosition: PropTypes.bool.isRequired,
  itemColor: PropTypes.objectOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default AvatarScreen;
