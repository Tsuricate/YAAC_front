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
      <Button p={2} rightIcon={<CheckIcon />} color="white" fontWeight="bold" bgGradient="linear(to-r, #0f7336, #0f7831, #117d2a, #168222, #1d8717)">
        Fini
      </Button>
      <Spacer />

      <HStack spacing={{ base: 2, lg: 4 }}>
        {changeColor
          ? <RoundButton ariaLabel="Change color" icon={<FaPalette />} color="snow" onClick={() => handleDisplay('Colors')} />
          : <></>}
        {changePosition
          ? <RoundButton ariaLabel="Move an element" icon={<FaArrowsAlt />} color="snow" onClick={() => handleDisplay('Positions')} />
          : <></>}

      </HStack>
    </Flex>
  );
};

ActionButtons.propTypes = {
  setEditionMode: PropTypes.func.isRequired,
  changeColor: PropTypes.bool.isRequired,
  changePosition: PropTypes.bool.isRequired,
};

export default ActionButtons;
