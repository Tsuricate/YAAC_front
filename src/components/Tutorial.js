import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import JoyRide from 'react-joyride';
import { getTourSteps } from '../utils/functions';

const Tutorial = ({ isTutorialRunning, setIsTutorialRunning, currentCategoryName }) => {
  const padding = useBreakpointValue({ base: '10px 20px', lg: '25px 35px' });
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

  const TOUR_STEPS = getTourSteps(currentCategoryName);

  return (
    <>
      <JoyRide
        callback={handleCallback}
        disableScrollParentFix
        disableOverlayClose
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
            padding,
            textAlign: 'left',
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
  currentCategoryName: PropTypes.string.isRequired,
};

export default Tutorial;
