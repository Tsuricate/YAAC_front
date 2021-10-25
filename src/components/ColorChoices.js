import {
  Button, Input, Wrap, WrapItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { getColourPaletteForCategory } from '../utils/functions';
import RoundButton from './RoundButton';

export const ColorChoices = ({
  setItemColor, initialColor, currentCategoryName, setBackgroundColor,
}) => {
  const handleItemColor = (color) => {
    if (currentCategoryName === 'background-color') {
      setBackgroundColor(color);
    } else {
      setItemColor((prevState) => ({ ...prevState, [currentCategoryName]: color }));
    }
  };

  const availableColors = getColourPaletteForCategory(currentCategoryName);

  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  return (

    <Wrap spacing="10px" height="100%" pt="3em">
      { availableColors.map((color) => (
        <WrapItem key={color}>
          <RoundButton ariaLabel="color-choices" color={color} onClick={() => handleItemColor(color)} size="lg" />
        </WrapItem>
      ))}
      <WrapItem>
        <Button variant="spinning-wheel" aria-label="color-choices" onClick={handleClick} size="lg" />
        <Input type="color" ref={inputRef} value={initialColor} onChange={(e) => handleItemColor(e.target.value)} opacity="0" />
      </WrapItem>
    </Wrap>

  );
};

ColorChoices.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  setItemColor: PropTypes.func.isRequired,
  currentCategoryName: PropTypes.string.isRequired,
  initialColor: PropTypes.string.isRequired,
};

const MemoizedColorChoices = React.memo(ColorChoices);
export default MemoizedColorChoices;
