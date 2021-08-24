import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AvatarScreen from './components/AvatarScreen';
import ChoicesContainer from './components/ChoicesContainer';
import ColorChoices from './components/ColorChoices';
import ItemChoices from './components/ItemChoices';
import MainCategories from './components/MainCategories';
import PositionChoices from './components/PositionChoices';
import { getCategories, getDefaultItems } from './utils/axios';

const App = () => {
  const [editionMode, setEditionMode] = useState('Items');
  const [backgroundColor, setbackgroundColor] = useState('#f1f1f1');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [itemColor, setItemColor] = useState({ eyes: 'pink', body: 'blue' });
  const [currentCategory, setCurrentCategory] = useState('body');
  const [selectedItems, setSelectedItems] = useState([]);
  const [changeColor, setChangeColor] = useState(true);
  const [changePosition, setChangePosition] = useState(false);

  useEffect(() => {
    getCategories(setCategories);
    getDefaultItems(setItems);
  }, []);

  const isEditingItems = editionMode === 'Items';
  const isEditingBackground = currentCategory === 'background-color';

  return (
    <Flex
      minHeight="100vh"
      maxHeight="100vh"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems="center"
      mx={{ lg: '20' }}
    >
      <AvatarScreen
        setEditionMode={setEditionMode}
        backgroundColor={backgroundColor}
        selectedItems={selectedItems}
        changeColor={changeColor}
        changePosition={changePosition}
        itemColor={itemColor}
        currentCategory={currentCategory}
      />

      <Flex flexDirection="column" overflowY="hidden" minHeight={{ base: '50vh', lg: '80vh' }} ml={{ lg: '16' }} flexGrow={1} bgColor="#58758C" p={{ lg: '5' }}>

        <Box mb={{ lg: '3em' }}>
          <MainCategories
            setItems={setItems}
            categories={categories}
            setChangeColor={setChangeColor}
            setChangePosition={setChangePosition}
            setEditionMode={setEditionMode}
            setCurrentCategory={setCurrentCategory}
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
          />
          )}

          { (editionMode === 'Colors' || isEditingBackground) && (
          <ColorChoices
            setBackgroundColor={setbackgroundColor}
            setItemColor={setItemColor}
            currentCategory={currentCategory}
          />
          )}

          { editionMode === 'Positions' && (
          <PositionChoices />
          )}
        </ChoicesContainer>

      </Flex>
    </Flex>
  );
};

export default App;
