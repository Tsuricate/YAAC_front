import React from 'react';
import {
  Heading, Text, Button, Flex,
} from '@chakra-ui/react';

const Header = () => (
  <Flex
    height={{ lg: '80%' }}
    width={{ lg: '17%' }}
    m="5"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
  >
    <Heading variant="main-title">
      YAAC
    </Heading>
    <Text
      fontSize="md@fontsource/aclonica"
      mt={{ lg: 2 }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent a erat lorem. Nunc nibh elit, consectetur vehicula risus at, elementum porta mauris.
      Vivamus ullamcorper nec nibh quis porttitor. Donec eget consequat lectus.
      Praesent vitae dolor tellus. Mauris feugiat et tortor vel auctor.
      Sed mattis orci sed metus faucibus porta. Nulla.
    </Text>
    <Button variant="start-tutorial" isFullWidth>Show me how !</Button>

  </Flex>

);

export default Header;
