import React, { useEffect, useState } from 'react';
import AvatarScreen from './components/AvatarScreen';
import MainCategories from './components/MainCategories';
import ItemChoices from './components/ItemChoices';
import ColorChoices from './components/ColorChoices';
import PositionChoices from './components/PositionChoices';
import { Flex, Box } from '@chakra-ui/react';
import {getDefaultItems, getCategories} from './utils/axios';

const App = () => {

  const [editionMode, setEditionMode] = useState("Items");
  const [backgroundColor, setbackgroundColor] = useState("Gainsboro");
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    getDefaultItems(setItems);
    getCategories(setCategories);
  }, []);

  return (
    <Flex minHeight="100vh" maxHeight="100vh" flexDirection={{base: "column", lg: "row"}} alignItems="center" mx={{lg: "5"}}>
      <AvatarScreen setEditionMode={setEditionMode}  backgroundColor={backgroundColor} selectedItems={selectedItems} />

      <Flex flexDirection="column" overflowY="hidden" minHeight={{base: "50vh", lg: "80vh"}} ml={{lg: "4"}} flexGrow={1}>
        
        <Box >
          <MainCategories setItems={setItems} categories={categories} />
        </Box>

        { editionMode === "Items" &&
          <Box overflowY="auto" >
            <ItemChoices items={items} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
          </Box> }

        { editionMode === "Colors" &&
          <Flex flexGrow={1} overflowY="auto" >
            <ColorChoices setBackgroundColor={setbackgroundColor} setEditionMode={setEditionMode} />
          </Flex> }

        { editionMode === "Positions" && <PositionChoices />  }

      </Flex>
    </Flex>    
  )
}

export default App;
