import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Spacer, HStack, Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FaArrowsAlt, FaPalette } from 'react-icons/fa';
import RoundButton from './RoundButton';

const ActionButtons = ({ setEditionMode, changeColor, changePosition }) => {
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
        {changeColor
          ? <RoundButton ariaLabel="Change color" icon={<FaPalette />} color="gray" onClick={() => handleDisplay('Colors')} />
          : <></>}
        {changePosition
          ? <RoundButton ariaLabel="Move an element" icon={<FaArrowsAlt />} color="gray" onClick={() => handleDisplay('Positions')} />
          : <></>}

      </HStack>
    </Flex>
  );
};

ActionButtons.propTypes = {
  setEditionMode: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  changePosition: PropTypes.func.isRequired,
};

export default ActionButtons;
