/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import JoyRide from 'react-joyride';

const TOUR_STEPS = [
  {
    target: '.tour-categories',
    content: 'You can chose here which category you want to modify. Let\'s take "Body" for this example !',
    disableBeacon: true,
  },
  {
    target: '.tour-items',
    content: 'Here are all the different "Body" designs available. Try them, change your mind, delete them : make your Avatar unique !',
  },
  {
    target: '.tour-avatar-screen',
    content: 'Here\'s your canvas. You can see your Avatar with all your current choices.',
    placement: 'right',
  },
  {
    target: '.tour-avatar-customization',
    content: 'Some items allows you to customize their color and/or their position.',
  },
  {
    target: '.tour-avatar-download',
    content: 'Satisfied with how your avatar is looking ? Download it and use it anywhere you want !',
  },
];

const Tutorial = ({ isTutorialRunning, setIsTutorialRunning }) => {
  const [storeHelpers, setStoreHelpers] = useState(null);

  /* Called when Joyride's state changes. Handle close and reset tutorial */
  const handleCallback = (event) => {
    if (event.type === 'tour:end' || event.action === 'close') {
      setIsTutorialRunning(false);
      storeHelpers.reset();
    }
  };

  /* Give access to store methods to control the tour programmatically */
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
        styles={{
          options: {
            backgroundColor: '#F7F6F4',
            overlayColor: '#000000a8',
            primaryColor: '#61A0AF',
            textColor: '#333333',
          },
          tooltipContent: {
            fontSize: 18,
            padding: '25px 35px',
          },
          buttonSkip: {
            border: '1px solid #61A0AF',
            borderRadius: '5px',
          },
          buttonNext: {
            color: '#000000',
          },
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
