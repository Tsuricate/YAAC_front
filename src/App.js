import {
  Box, Flex, useBreakpointValue, Divider,
} from '@chakra-ui/react';
import React, { useEffect, useReducer, useState } from 'react';
import Tutorial from './components/Tutorial';
import MemoizedHeader from './components/Header';
import MemoizedAvatarScreen from './components/AvatarScreen';
import MemoizedMainCategories from './components/MainCategories';
import ChoicesContainer from './components/ChoicesContainer';
import MemoizedColorChoices from './components/ColorChoices';
import ItemChoices from './components/ItemChoices';
import PositionChoices from './components/PositionChoices';
import { getDefaultItems } from './utils/axios';
import reducer from './utils/reducers';

const App = () => {
  const [editionMode, setEditionMode] = useState('Items');
  const [backgroundColor, setBackgroundColor] = useState('#f1f1f1');
  const [currentCategoryInfos, setCurrentCategoryInfos] = useState(null);
  const [isTutorialRunning, setIsTutorialRunning] = useState(false);
  const [items, setItems] = useState([]);
  const [itemColor, setItemColor] = useState({ eyes: 'pink', body: 'blue', jaw: 'blue' });
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsPosition, dispatchItemsPosition] = useReducer(reducer,
    {
      body: { directionX: 0, directionY: 0 },
      eyes: { directionX: 0, directionY: 0 },
      eyebrows: { directionX: 0, directionY: 0 },
      mouth: { directionX: 0, directionY: 0 },
      nose: { directionX: 0, directionY: 0 },
    });

  useEffect(() => {
    getDefaultItems(setItems);
  }, []);

  const isEditingItems = editionMode === 'Items';
  const isEditingBackground = currentCategoryInfos?.id === 'background-color';
  const isHeaderFullyDisplayed = useBreakpointValue({ base: false, lg: true }) || false;
  const colorToEdit = editionMode === 'Items' ? itemColor[currentCategoryInfos?.id] : backgroundColor;

  return (
    <Flex
      height="100vh"
      width="100%"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems="center"
      p={{ lg: 4 }}
      bgColor="#F7F6F4"
    >
      <Tutorial isTutorialRunning={isTutorialRunning} setIsTutorialRunning={setIsTutorialRunning} />

      {isHeaderFullyDisplayed && (<MemoizedHeader setIsTutorialRunning={setIsTutorialRunning} />)}

      {/* Theses two boxes help display AvatarScreen block above categories & items block */}
      <Box order={{ lg: '3' }} position={{ lg: 'relative' }} height={{ lg: '100%' }} width={{ lg: '35%' }}>
        <Box position={{ lg: 'absolute' }} left={{ lg: '-10em' }} top={{ lg: '7em' }} className="tour-avatar-screen">
          <MemoizedAvatarScreen
            setEditionMode={setEditionMode}
            backgroundColor={backgroundColor}
            selectedItems={selectedItems}
            changeColor={currentCategoryInfos?.changeColor}
            changePosition={currentCategoryInfos?.changePosition}
            itemColor={itemColor}
            currentCategoryName={currentCategoryInfos?.id}
            itemsPosition={itemsPosition}
            isHeaderFullyDisplayed={isHeaderFullyDisplayed}
            isTutorialRunning={isTutorialRunning}
            setIsTutorialRunning={setIsTutorialRunning}
          />
        </Box>
      </Box>

      <Flex
        flexDirection="column"
        overflowY="hidden"
        flexGrow="1"
        height={{ base: '40vh', lg: '100%' }}
        width={{ lg: '55%' }}
        p={{ lg: '16' }}
        pr={{ lg: '14%' }}
        bgColor={{ lg: '#2A2B2A' }}
      >

        <Box overflowY={{ lg: 'auto' }} pb={{ lg: 5 }} width="100%" className="tour-categories">
          <MemoizedMainCategories
            setItems={setItems}
            setEditionMode={setEditionMode}
            currentCategory={currentCategoryInfos?.id}
            setCurrentCategoryInfos={setCurrentCategoryInfos}
          />
        </Box>

        {isHeaderFullyDisplayed && (<Divider variant="separation-categories-items" />)}

        <ChoicesContainer
          centerContent={!isEditingItems}
          showCloseButton={!isEditingItems}
          setEditionMode={setEditionMode}
        >
          { editionMode === 'Items' && !isEditingBackground && (
          <ItemChoices
            items={items}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            isMandatory={currentCategoryInfos?.isMandatory}
            currentCategoryName={currentCategoryInfos?.id}
          />
          )}

          { (editionMode === 'Colors' || isEditingBackground) && (
          <MemoizedColorChoices
            setBackgroundColor={setBackgroundColor}
            setItemColor={setItemColor}
            currentCategoryName={currentCategoryInfos?.id}
            initialColor={colorToEdit}
          />
          )}

          { editionMode === 'Positions' && (
          <PositionChoices
            currentCategoryName={currentCategoryInfos?.id}
            dispatchItemsPosition={dispatchItemsPosition}
          />
          )}
        </ChoicesContainer>
      </Flex>

    </Flex>
  );
};

export default App;
