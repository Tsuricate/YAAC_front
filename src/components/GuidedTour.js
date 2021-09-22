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

const GuidedTour = () => {
  const [isTutorialRunning, setIsTutorialRunning] = useState(false);
  const handleClick = () => {
    setIsTutorialRunning(true);
  };
  const handleCallback = (param) => {
    if (param.type === 'tour:end' || param.action === 'close') {
      setIsTutorialRunning(false);
    }
  };

  return (
    <>
      <JoyRide
        callback={handleCallback}
        steps={TOUR_STEPS}
        continuous
        showProgress
        showSkipButton
        run={isTutorialRunning}
        locale={{
          last: 'End tour',
          skip: 'Close tour',
          back: 'Previous',
        }}
      />
      <Button variant="start-tutorial" isFullWidth onClick={handleClick}>Show me how !</Button>
    </>
  );
};
export default GuidedTour;
