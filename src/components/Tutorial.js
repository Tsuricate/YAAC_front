/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JoyRide from 'react-joyride';
import TutorialStartButton from './TutorialStartButton';

const TOUR_STEPS = [
  {
    target: '.tour-categories',
    content: 'This is our tour’s logo',
    disableBeacon: true,
  },
  {
    target: '.tour-items',
    content: 'View the cart you’ve added here',
    disableBeacon: true,
  },
  {
    target: '.tour-avatar-screen',
    content: 'Contact the developer',
    disableBeacon: true,
  },
  {
    target: '.tour-avatar-customization',
    content: 'We accept returns after 14 days max',
    disableBeacon: true,
  },
  {
    target: '.tour-avatar-download',
    content: 'Finally satisfied with how your avatar is looking ? Download it !',
    disableBeacon: true,
  },
];

const Tutorial = ({ isTutorialRunning, setIsTutorialRunning }) => {
  const [storeHelpers, setStoreHelpers] = useState(null);

  const handleCallback = (event) => {
    if (event.type === 'tour:end' || event.action === 'close') {
      setIsTutorialRunning(false);
      storeHelpers.reset();
    }
  };

  const getHelpers = (helpers) => {
    setStoreHelpers(helpers);
  };

  return (
    <>
      <JoyRide
        callback={handleCallback}
        steps={TOUR_STEPS}
        continuous
        showProgress
        getHelpers={getHelpers}
        showSkipButton
        run={isTutorialRunning}
        locale={{
          last: 'End tour',
          skip: 'Close tour',
          back: 'Previous',
        }}
      />
    </>
  );
};

Tutorial.propTypes = {
  isTutorialRunning: PropTypes.bool.isRequired,
  setIsTutorialRunning: PropTypes.func.isRequired,
};

export default Tutorial;
