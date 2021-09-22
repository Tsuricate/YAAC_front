import { Button } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const TutorialStartButton = ({ setIsTutorialRunning, closeModal }) => {
  const startTutorial = () => {
    if (closeModal) {
      closeModal();
    }
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
};

export default TutorialStartButton;
