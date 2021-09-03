import {
  ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon, ArrowUpIcon,
} from '@chakra-ui/icons';
import { Box, SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import RoundButton from './RoundButton';

const PositionChoices = ({ currentCategoryName, dispatchItemsPosition }) => {
  const intervalRef = useRef(null);

  const handleMouseDown = (actionType, actionDirection) => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      dispatchItemsPosition({
        type: actionType,
        category: currentCategoryName,
        direction: actionDirection,
      });
    }, 100);
  };

  const handleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <SimpleGrid columns={3} spacing={4}>
        <Box />
        <RoundButton
          icon={<ArrowUpIcon />}
          color="gray"
          ariaLabel="Move up element"
          onMouseDown={() => handleMouseDown('Increment', 'directionY')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <Box />
        <RoundButton
          icon={<ArrowBackIcon />}
          color="gray"
          ariaLabel="Move element to the left"
          onMouseDown={() => handleMouseDown('Increment', 'directionX')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <Box />
        <RoundButton
          icon={<ArrowForwardIcon />}
          color="gray"
          ariaLabel="Move element to the right"
          onMouseDown={() => handleMouseDown('Decrement', 'directionX')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <Box />
        <RoundButton
          icon={<ArrowDownIcon />}
          color="gray"
          ariaLabel="Move down element"
          onMouseDown={() => handleMouseDown('Decrement', 'directionY')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <Box />
      </SimpleGrid>
    </>
  );
};

PositionChoices.propTypes = {
  currentCategoryName: PropTypes.string.isRequired,
  dispatchItemsPosition: PropTypes.func.isRequired,
};

export default PositionChoices;
