import { Wrap, WrapItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { getColourPaletteForCategory } from '../utils/functions';
import RoundButton from './RoundButton';
import { choicesAnimation } from '../utils/animations';

const ColorChoices = ({
  setItemColor, currentCategoryName, setBackgroundColor,
}) => {
  const handleItemColor = (color) => {
    if (currentCategoryName === 'background-color') {
      setBackgroundColor(color);
    } else {
      setItemColor((prevState) => ({ ...prevState, [currentCategoryName]: color }));
    }
  };

  const availableColors = getColourPaletteForCategory(currentCategoryName);
  const marginTop = currentCategoryName === 'background-color' ? '2em' : '6em';

  return (

    <Wrap spacing="10px" height="100%" mt={marginTop}>
      { availableColors.map((color) => (
        <WrapItem key={color} animation={`${choicesAnimation} 0.5s ease-in-out both`}>
          <RoundButton ariaLabel="color-choices" color={color} onClick={() => handleItemColor(color)} size="lg" />
        </WrapItem>
      ))}
    </Wrap>

  );
};

ColorChoices.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  setItemColor: PropTypes.func.isRequired,
  currentCategoryName: PropTypes.string.isRequired,
};

export default ColorChoices;
