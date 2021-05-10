import React from 'react';
import { IconButton } from '@chakra-ui/react';

const RoundButton = ({ icon, ariaLabel }) => {
  return (
    <IconButton
        borderRadius="full"
        variant="solid"
        colorScheme="gray" 
        icon={icon}
        aria-label={ariaLabel}
      />
  )
}

export default RoundButton;
