import React from 'react';
import {
  Heading, Text, Button, Box,
} from '@chakra-ui/react';

const Header = () => (
  <Box height={{ lg: '100%' }} width={{ lg: '17%' }}>
    <Heading fontSize="5xl" letterSpacing={8}>YAAC</Heading>
    <Text fontSize="1xl" mt={{ lg: 2 }}>A wonderful catchphrase to come !</Text>
    <Button colorScheme="teal">Show me how !</Button>

  </Box>

);

export default Header;
