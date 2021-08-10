import React from 'react'
import ActionButtons from './ActionButtons';
import AvatarImageContainer from './AvatarImageContainer';
import { Box, Center } from '@chakra-ui/react';

const AvatarScreen = ({ setEditionMode, backgroundColor, selectedItems }) => {

  return (
    <Box w="100vw" h="100vw" maxHeight={{ md: "50vh", lg: "80vh" }} maxWidth={{ md:"50vh", lg: "80vh" }} position="relative" >
      <Box bg={backgroundColor} width="100%" height="100%">
        <Center>
          {selectedItems.map((item) => (
            <AvatarImageContainer key={item} bodyPart={item} />
          ))}
        </Center>
        
      </Box>

      <Box position="absolute" bottom="4" width="100%" px="3">
        <ActionButtons setEditionMode={setEditionMode} />
      </Box>
     
    </Box>
  )
}

export default AvatarScreen;
