import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Spacer, HStack, Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FaArrowsAlt, FaPalette } from 'react-icons/fa';
import RoundButton from './RoundButton';

const ActionButtons = ({
  setEditionMode, changeColor, changePosition, isTutorialRunning,
}) => {
  const handleDisplay = (mode) => {
    setEditionMode(mode);
  };

  return (
    <Flex>
      <Button
        rightIcon={<CheckIcon />}
        color="black"
        fontWeight="bold"
        bgColor="#EDA81F"
        className="tour-avatar-download"
      >
        Done
      </Button>
      <Spacer />

      <HStack spacing={{ base: 2, lg: 4 }} className="tour-avatar-customization">
        {changeColor || isTutorialRunning ? (
          <RoundButton
            ariaLabel="Change color"
            icon={<FaPalette />}
            color="snow"
            onClick={() => handleDisplay('Colors')}
          />
        ) : (
          <></>
        )}
        {changePosition || isTutorialRunning ? (
          <RoundButton
            ariaLabel="Move an element"
            icon={<FaArrowsAlt />}
            color="snow"
            onClick={() => handleDisplay('Positions')}
          />
        ) : (
          <></>
        )}
      </HStack>
    </Flex>
  );
};

ActionButtons.propTypes = {
  setEditionMode: PropTypes.func.isRequired,
  changeColor: PropTypes.bool.isRequired,
  changePosition: PropTypes.bool.isRequired,
  isTutorialRunning: PropTypes.bool.isRequired,
};

export default ActionButtons;
