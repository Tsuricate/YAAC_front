import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const RoundButton = ({
  icon, ariaLabel, color, onClick, onMouseDown, onMouseUp, onMouseLeave, size,
}) => (
  <IconButton
    borderRadius="full"
    variant="solid"
    boxShadow="0px 0px 6px #7d7676"
    bgColor={color}
    icon={icon}
    aria-label={ariaLabel}
    _hover={{ bg: color }}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onMouseLeave={onMouseLeave}
    size={size}
  />
);

RoundButton.defaultProps = {
  icon: null,
  onClick: null,
  onMouseDown: null,
  onMouseUp: null,
  onMouseLeave: null,
  size: 'md',
};

RoundButton.propTypes = {
  icon: PropTypes.element,
  ariaLabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseLeave: PropTypes.func,
  size: PropTypes.string,
};

export default RoundButton;
