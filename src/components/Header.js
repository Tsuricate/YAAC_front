import React from 'react';
import {
  Heading, Text, Button, Flex,
} from '@chakra-ui/react';

const Header = () => (
  <Flex
    height={{ lg: '100%' }}
    width={{ lg: '17%' }}
    m="5"
    flexDirection="column"
    justifyContent="space-around"
    alignItems="center"
  >
    <Heading lineHeight="0.8" textAlign="center">
      <Text fontFamily="Life Savers" fontSize="0.7em" textTransform="uppercase">Yet Another</Text>
      <Text fontSize="2.2em">Avatar Creator</Text>
    </Heading>
    <Text textAlign="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent a erat lorem. Nunc nibh elit, consectetur vehicula risus at, elementum porta mauris.
      Vivamus ullamcorper nec nibh quis porttitor.
      Praesent vitae dolor tellus. Nulla.
    </Text>
    <Button variant="start-tutorial" isFullWidth>Show me how !</Button>

  </Flex>

);

export default Header;
