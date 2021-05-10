import React from 'react'
import ActionButtons from './ActionButtons';
import { Flex, Center } from '@chakra-ui/react';

const AvatarScreen = () => {
  return (
    <Center>
      <Flex 
        alignItems="flex-end"
        p="4"
        bg="gray.300"  
        w="100vw"
        h="100vw"
        maxHeight={{ md: "50vh", lg: "80vh" }}
        maxWidth={{  md:"50vh", lg: "80vh" }}
      >
        <ActionButtons />
      </Flex>
    </Center>
  )
}

export default AvatarScreen;
