import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Wrap } from '@chakra-ui/react';
import RoundButton from './RoundButton';
import { backgroundColors } from '../data/backgroundColors';

const ColorChoices = ({ setBackgroundColor }) => {
  const handleBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (

    <Flex flexDirection="column" bgColor="Gainsboro" flexGrow={1} justifyContent="center" alignItems="center" px={3}>
      <Wrap>
        { backgroundColors.map((color) => (
          <RoundButton key={color} ariaLabel="orange" color={color} onClick={() => handleBackgroundColor(color)} />
        ))}
      </Wrap>
    </Flex>

  );
};

ColorChoices.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
};

export default ColorChoices;
