import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import ActionButtons from './ActionButtons';
import AvatarImageContainer from './AvatarImageContainer';
import LightHeader from './LightHeader';

const AvatarScreen = ({
  setEditionMode,
  backgroundColor,
  selectedItems,
  changeColor,
  changePosition,
  itemColor,
  currentCategoryName,
  itemsPosition,
  isHeaderFullyDisplayed,
  isTutorialRunning,
  setIsTutorialRunning,
}) => (
  <Box
    height={{ base: '60vh', md: '50vh', lg: '78vh' }}
    width={{ base: '100vw', md: '50vh', lg: '35vw' }}
    position="relative"
  >
    {/* This box is only for placing border image on top on avatar container */}
    <Box
      position="absolute"
      sx={{ border: { lg: '10px solid' }, borderImage: { lg: 'url(avatarBorder.svg) 45% / 11 / 3 stretch' } }}
      width="100%"
      height="100%"
      bottom={{ lg: '11px' }}
    />

    { !isHeaderFullyDisplayed && <LightHeader setIsTutorialRunning={setIsTutorialRunning} /> }

    {/* This box represent the avatar's background to color */}
    <Flex bg={backgroundColor} width="100%" height="100%" overflow="hidden" alignItems="flex-end" className="canvas">
      <AspectRatio width="100%" ratio={4 / 5} position="inherit">
        <Box className="WHOAREU">
          {selectedItems.map((item) => (
            <AvatarImageContainer
              key={item.id}
              imageUrl={item.imageUrl}
              itemColor={itemColor}
              currentCategoryName={currentCategoryName}
              itemsPosition={itemsPosition[item.category]}
            />
          ))}
        </Box>
      </AspectRatio>
    </Flex>
    <Box position="absolute" width="100%" bottom={{ base: 2, lg: 3 }} px={{ base: 2, lg: 4 }}>
      <ActionButtons
        setEditionMode={setEditionMode}
        changeColor={changeColor}
        changePosition={changePosition}
        isTutorialRunning={isTutorialRunning}
      />
    </Box>

  </Box>
);

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
  isHeaderFullyDisplayed: PropTypes.bool.isRequired,
  isTutorialRunning: PropTypes.bool.isRequired,
  setIsTutorialRunning: PropTypes.func.isRequired,
};

const MemoizedAvatarScreen = React.memo(AvatarScreen);
export default MemoizedAvatarScreen;
