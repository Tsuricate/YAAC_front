import React from 'react';
import { Text, Button } from '@chakra-ui/react';

const TitleApp = () => (
  <>
    <Text fontSize="5xl" mx={{ lg: 20 }} mt={{ lg: 10 }} letterSpacing={2}> Yet Another Avatar Creator</Text>
    <Text fontSize="2xl" mx={{ lg: 20 }} mt={{ lg: 2 }} position="relative">A wonderful catchphrase to come !</Text>
    <Button colorScheme="teal" position="absolute" left="29em" bottom="60em">Help me to start !</Button>
  </>

);

export default TitleApp;
