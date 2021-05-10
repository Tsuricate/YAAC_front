import React from 'react';
import AvatarScreen from './components/AvatarScreen';
import MainCategories from './components/MainCategories';
import ItemChoices from './components/ItemChoices';
import { Flex, Box } from '@chakra-ui/react';


const App = () => {
  return (
    <Flex minHeight="100vh" maxHeight="100vh" flexDirection={{base: "column", lg: "row"}} alignItems="center" mx={{lg: "5"}}>
      <AvatarScreen />
      <Flex flexDirection="column" overflowY="hidden" minHeight={{lg: "80vh"}} maxHeight={{lg: "80vh"}} ml={{lg: "4"}}>
        <MainCategories />
        <Box overflowY="auto">
          <ItemChoices />
        </Box>
      </Flex>
    </Flex>    
  )
}

export default App;
