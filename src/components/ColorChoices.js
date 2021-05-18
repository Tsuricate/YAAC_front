import React from 'react';
import { Flex, Wrap, Text } from '@chakra-ui/react';
import RoundButton from './RoundButton';

const ColorChoices = () => {

  return (
    
    <Flex flexDirection="column" bgColor="Gainsboro" flexGrow={1} justifyContent="center" alignItems="center">
      <Text fontSize="4xl" textTransform="uppercase" letterSpacing={'wider'} fontFamily="Apple Color Emoji" >Choisissez une couleur :</Text>
      <Wrap>
        <RoundButton ariaLabel="Orange color" color="orange" />
        <RoundButton ariaLabel="Blue color" color="blue" />
        <RoundButton ariaLabel="Purple color"  color="purple" />
        <RoundButton ariaLabel="Green color" color="green" />
        <RoundButton ariaLabel="Pink color" color="pink" />
        <RoundButton ariaLabel="Cyan color" color="cyan" />
        <RoundButton ariaLabel="Yellow color" color="yellow" />
      </Wrap>
    </Flex>

  )
}

export default ColorChoices;
