import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useReducer, useState } from 'react';
import AvatarScreen from './components/AvatarScreen';
import ChoicesContainer from './components/ChoicesContainer';
import ColorChoices from './components/ColorChoices';
import ItemChoices from './components/ItemChoices';
import MainCategories from './components/MainCategories';
import PositionChoices from './components/PositionChoices';
import Header from './components/Header';
import { getCategories, getDefaultItems } from './utils/axios';
import reducer from './utils/reducers';

const App = () => {
  const [editionMode, setEditionMode] = useState('Items');
  const [backgroundColor, setbackgroundColor] = useState('#f1f1f1');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [itemColor, setItemColor] = useState({ eyes: 'pink', body: 'blue' });
  const [currentCategoryInfos, setCurrentCategoryInfos] = useState(null);
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
    getCategories(setCategories, setCurrentCategoryInfos);
    getDefaultItems(setItems);
  }, []);

  const isEditingItems = editionMode === 'Items';
  const isEditingBackground = currentCategoryInfos?.id === 'background-color';
  const isHeaderDisplayed = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      {isHeaderDisplayed && (<Header />)}
      <Flex
        minHeight="100vh"
        maxHeight="100vh"
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
        mx={{ lg: 20 }}
      >
        <AvatarScreen
          setEditionMode={setEditionMode}
          backgroundColor={backgroundColor}
          selectedItems={selectedItems}
          changeColor={currentCategoryInfos?.changeColor}
          changePosition={currentCategoryInfos?.changePosition}
          itemColor={itemColor}
          currentCategoryName={currentCategoryInfos?.id}
          itemsPosition={itemsPosition}
        />

        <Flex
          flexDirection="column"
          overflowY="hidden"
          height={{ base: '50vh', lg: '80vh' }}
          ml={{ lg: '16' }}
          flexGrow={1}
          p={{ lg: '5' }}
          bgColor={{ lg: 'rgba(47, 49, 51, 0.6)' }}
          borderRadius={{ lg: '10px' }}
        >

          <Box overflowY={{ lg: 'auto' }} pb={{ lg: 5 }} pl={{ lg: 3 }}>
            <MainCategories
              setItems={setItems}
              categories={categories}
              setEditionMode={setEditionMode}
              currentCategory={currentCategoryInfos?.id}
              setCurrentCategoryInfos={setCurrentCategoryInfos}
            />
          </Box>

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
            <ColorChoices
              setBackgroundColor={setbackgroundColor}
              setItemColor={setItemColor}
              currentCategoryName={currentCategoryInfos?.id}
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
    </>
  );
};

export default App;
