import React from 'react';
import { Text, Button, Box } from '@chakra-ui/react';

const Header = () => (
  <Box mx={{ lg: 20 }} mt={{ lg: 10 }} position="relative">
    <Text fontSize="5xl" letterSpacing={2}> Yet Another Avatar Creator</Text>
    <Text fontSize="2xl" mt={{ lg: 2 }}>A wonderful catchphrase to come !</Text>
    <Button colorScheme="teal" position="absolute" left="25em" top="5em">Help me to start !</Button>
  </Box>

);

export default Header;
