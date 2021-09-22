/* eslint-disable no-unused-vars */
import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import JoyRide from 'react-joyride';

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

const Tutorial = () => {
  const [isTutorialRunning, setIsTutorialRunning] = useState(false);
  const [storeHelpers, setStoreHelpers] = useState(null);

  const startTutorial = () => {
    setIsTutorialRunning(true);
  };

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
        debug
        getHelpers={getHelpers}
        showSkipButton
        run={isTutorialRunning}
        locale={{
          last: 'End tour',
          skip: 'Close tour',
          back: 'Previous',
        }}
      />
      <Button variant="start-tutorial" isFullWidth onClick={startTutorial}>Show me how !</Button>
    </>
  );
};
export default Tutorial;
