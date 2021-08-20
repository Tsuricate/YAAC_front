import { IconButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const RoundButton = ({
  icon, ariaLabel, color, onClick,
}) => (
  <IconButton
    borderRadius="full"
    variant="solid"
    bgColor={color}
    icon={icon}
    aria-label={ariaLabel}
    _hover={{ bg: color }}
    onClick={onClick}
  />
);

RoundButton.propTypes = {
  icon: PropTypes.element.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RoundButton;
