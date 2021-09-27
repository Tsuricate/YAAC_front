import { Input, Wrap, WrapItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';
import backgroundColors from '../data/backgroundColors';
import RoundButton from './RoundButton';

const ColorChoices = ({ setBackgroundColor, setItemColor, currentCategoryName }) => {
  const handleItemColor = (color) => {
    if (currentCategoryName === 'background-color') {
      setBackgroundColor(color);
    } else {
      setItemColor((prevState) => ({ ...prevState, [currentCategoryName]: color }));
    }
  };

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  return (

    <Wrap spacing="10px" height="100%" pt="3em">
      { backgroundColors.map((color) => (
        <WrapItem key={color}>
          <RoundButton ariaLabel="color-choices" color={color} onClick={() => handleItemColor(color)} size="lg" />
        </WrapItem>
      ))}
      <WrapItem>
        <RoundButton ariaLabel="color-choices" color="#f0f" onClick={handleClick} icon={<HiOutlineSparkles />} size="lg" />
        <Input type="color" ref={inputRef} onChange={(event) => { handleItemColor(event.target.value); }} opacity="0" />
      </WrapItem>
    </Wrap>

  );
};

ColorChoices.propTypes = {
  setBackgroundColor: PropTypes.func.isRequired,
  setItemColor: PropTypes.func.isRequired,
  currentCategoryName: PropTypes.string.isRequired,
};

export default ColorChoices;
