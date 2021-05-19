import React from 'react';
import { Button, Spacer, HStack, Flex } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FaArrowsAlt, FaPalette } from "react-icons/fa";
import RoundButton from './RoundButton';

const ActionButtons = ({ setEditionMode }) => {

  const handleDisplay = (mode) => {
    setEditionMode(mode);
  };

  return (
    <Flex>
      <Button p="5" rightIcon={<CheckIcon />} color="white" fontWeight="bold" bgGradient="linear(to-r, teal.500,green.500)">
        Terminé
      </Button>

      <Spacer />

      <HStack spacing={4}>
        <RoundButton ariaLabel="Change color" icon={<FaPalette />} color={"gray"} onClick={() => handleDisplay("Colors")}/>
        <RoundButton ariaLabel="Move an element" icon={<FaArrowsAlt />} color={"gray"} onClick={() =>handleDisplay("Positions")}/>
      </HStack>

    </Flex>
  )
}

export default ActionButtons;
