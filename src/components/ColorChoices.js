import React from 'react';
import { Flex, Wrap, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import RoundButton from './RoundButton';
import { backgroundColors } from '../data/backgroundColors';

const ColorChoices = ({ setBackgroundColor, setEditionMode }) => {
  const handleBackgroundColor = (color) => {
    setBackgroundColor(color); 
  };

  const handleDisplay = () => {
    setEditionMode("Items");
  };

  return (
    
    <Flex flexDirection="column" bgColor="Gainsboro" flexGrow={1} justifyContent="center" alignItems="center" >
      <Text fontSize="4xl" fontFamily="Apple Color Emoji" >Choisissez une couleur :</Text>
      <Wrap>
        <RoundButton icon={<ArrowBackIcon />} color="gray" ariaLabel="Close colors panel" onClick={handleDisplay}/>
        { backgroundColors.map((color) => (
          <RoundButton key={color} ariaLabel="orange" color={color} onClick={() => handleBackgroundColor(color)}/>
          )) 
        }
      </Wrap>
    </Flex>

  )
}

export default ColorChoices;
