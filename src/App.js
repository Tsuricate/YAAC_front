import React, { useState } from 'react';
import AvatarScreen from './components/AvatarScreen';
import MainCategories from './components/MainCategories';
import ItemChoices from './components/ItemChoices';
import ColorChoices from './components/ColorChoices';
import { Flex, Box } from '@chakra-ui/react';


const App = () => {

  const [changeColor, setChangeColor] = useState(false);
  
  return (
    <Flex minHeight="100vh" maxHeight="100vh" flexDirection={{base: "column", lg: "row"}} alignItems="center" mx={{lg: "5"}}>
      <AvatarScreen setChangeColor={setChangeColor} changeColor={changeColor}/>
      <Flex flexDirection="column" overflowY="hidden" minHeight={{lg: "80vh"}} maxHeight={{lg: "80vh"}} ml={{lg: "4"}} flexGrow={1}>
        
        <Box>
          <MainCategories />
        </Box>
        
        {changeColor 
          ? 
         <Flex flexGrow={1} overflowY="auto">
            <ColorChoices />
          </Flex>
          : 
          <Box overflowY="auto">
            <ItemChoices />
          </Box>
        }
       

      </Flex>
    </Flex>    
  )
}

export default App;
