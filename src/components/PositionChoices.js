/* eslint-disable react/jsx-props-no-spreading */
import {
  ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon, ArrowUpIcon,
} from '@chakra-ui/icons';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import RoundButton from './RoundButton';
import { choicesAnimation } from '../utils/animation';

const PositionChoices = ({ currentCategoryName, dispatchItemsPosition }) => {
  const intervalRef = useRef(null);

  const dispatchItemsPostion = (actionType, actionDirection) => {
    dispatchItemsPosition({
      type: actionType,
      category: currentCategoryName,
      direction: actionDirection,
    });
  };

  const handleMouseDown = (actionType, actionDirection) => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      dispatchItemsPostion(actionType, actionDirection);
    }, 200);
  };

  const handleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const sharedButtonProps = { color: '#f7f6f4', onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp };

  return (
    <Flex height="100%" alignItems={{ md: 'center' }} animation={`${choicesAnimation} 0.5s ease-in-out both`}>
      <SimpleGrid columns={3} spacing={4}>
        <Box />
        <RoundButton
          icon={<ArrowUpIcon />}
          {...sharedButtonProps}
          ariaLabel="Move up element"
          onMouseDown={() => handleMouseDown('Increment', 'directionY')}
          onClick={() => dispatchItemsPostion('Increment', 'directionY')}
        />
        <Box />
        <RoundButton
          icon={<ArrowBackIcon />}
          {...sharedButtonProps}
          ariaLabel="Move element to the left"
          onMouseDown={() => handleMouseDown('Increment', 'directionX')}
          onClick={() => dispatchItemsPostion('Increment', 'directionX')}
        />
        <Box />
        <RoundButton
          icon={<ArrowForwardIcon />}
          {...sharedButtonProps}
          ariaLabel="Move element to the right"
          onMouseDown={() => handleMouseDown('Decrement', 'directionX')}
          onClick={() => dispatchItemsPostion('Decrement', 'directionX')}
        />
        <Box />
        <RoundButton
          icon={<ArrowDownIcon />}
          {...sharedButtonProps}
          ariaLabel="Move down element"
          onMouseDown={() => handleMouseDown('Decrement', 'directionY')}
          onClick={() => dispatchItemsPostion('Decrement', 'directionY')}
        />
        <Box />
      </SimpleGrid>
    </Flex>
  );
};

PositionChoices.propTypes = {
  currentCategoryName: PropTypes.string.isRequired,
  dispatchItemsPosition: PropTypes.func.isRequired,
};

export default PositionChoices;
