/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import domtoimage from 'dom-to-image';
import {
  Button, Spacer, HStack, Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FaArrowsAlt, FaPalette } from 'react-icons/fa';
import RoundButton from './RoundButton';
import { actionButtonsAnimation } from '../utils/animation';

const ActionButtons = ({
  setEditionMode, changeColor, changePosition, isTutorialRunning,
}) => {
  const handleDisplay = (mode) => {
    setEditionMode(mode);
  };

  const downloadAvatar = () => {
    const node = document.querySelector('.canvas');
    domtoimage.toPng(node, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-avatar.png';
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <Flex>
      <Button
        rightIcon={<CheckIcon />}
        color="black"
        fontWeight="bold"
        bgColor="#EDA81F"
        className="tour-avatar-download"
        onClick={downloadAvatar}
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
            animation={`${actionButtonsAnimation} 0.8s both`}
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
            animation={`${actionButtonsAnimation} 0.9s both`}
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
