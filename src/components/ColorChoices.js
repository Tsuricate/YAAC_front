import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Wrap, Input } from '@chakra-ui/react';
import RoundButton from './RoundButton';
import { backgroundColors } from '../data/backgroundColors';

const ColorChoices = ({ setBackgroundColor, setItemColor, currentCategory }) => {
  const handleItemColor = (color) => {
    if (currentCategory === 'background-color') {
      setBackgroundColor(color);
    } else {
      setItemColor((prevState) => ({ ...prevState, [currentCategory]: color }));
    }
  };

  return (

    <Flex flexDirection="column" bgColor="Gainsboro" flexGrow={1} justifyContent="center" alignItems="center" px={3}>
      <Wrap>
        { backgroundColors.map((color) => (
          <RoundButton key={color} ariaLabel="color-choices" color={color} onClick={() => handleItemColor(color)} />
        ))}
        <Input type="color" onChange={(event) => { handleItemColor(event.target.value); }} />
      </Wrap>
    </Flex>

  );
};

ColorChoices.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  setItemColor: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default ColorChoices;
