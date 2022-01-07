import { Button } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { getDefaultItems } from '../utils/axios';

const TutorialStartButton = ({ setIsTutorialRunning, closeModal, setItems }) => {
  /* Modal (present on mobile & tablet devices) closed  before start tutorial */
  const startTutorial = () => {
    if (closeModal) {
      closeModal();
    }
    getDefaultItems(setItems);
    setIsTutorialRunning(true);
  };

  return (
    <Button variant="start-tutorial" isFullWidth onClick={startTutorial}>Show me how !</Button>
  );
};

TutorialStartButton.defaultProps = {
  closeModal: null,
};

TutorialStartButton.propTypes = {
  setIsTutorialRunning: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
  setItems: PropTypes.func.isRequired,
};

export default TutorialStartButton;
