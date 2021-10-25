import { Wrap, WrapItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { getColourPaletteForCategory } from '../utils/functions';
import RoundButton from './RoundButton';

export const ColorChoices = ({
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

  return (

    <Wrap spacing="10px" height="100%" pt="3em">
      { availableColors.map((color) => (
        <WrapItem key={color}>
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

const MemoizedColorChoices = React.memo(ColorChoices);
export default MemoizedColorChoices;
