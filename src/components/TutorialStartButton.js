import { Button } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const TutorialStartButton = ({
  setIsTutorialRunning, closeModal,
}) => {
  /* Modal (present on mobile & tablet devices) closed  before start tutorial */
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
