import React from 'react';
import {
  Heading, Text, Button, Box, HStack,
} from '@chakra-ui/react';

const Header = () => (
  <Box mx={{ lg: 20 }} mt={{ lg: 10 }}>
    <Heading fontSize="5xl" letterSpacing={6}>YAAC</Heading>
    <HStack spacing={8}>
      <Text fontSize="2xl" mt={{ lg: 2 }}>A wonderful catchphrase to come !</Text>
      <Button colorScheme="teal">Show me how !</Button>
    </HStack>

  </Box>

);

export default Header;
