import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Icon } from '@chakra-ui/react';
import { IoDiceOutline } from 'react-icons/io5';
import { composeRandomAvatar } from '../utils/functions';
import { randomButtonAnimation } from '../utils/animations';

const RandomAvatarButton = ({
  setSelectedItems, setBackgroundColor, setItemColor, categories,
}) => {
  const [animation, setAnimation] = useState(false);

  const handleRandomAvatar = () => {
    composeRandomAvatar(setSelectedItems, setBackgroundColor, setItemColor, categories);
  };
  const handleClick = () => {
    handleRandomAvatar();
    setAnimation(true);
  };

  const spinAnimation = animation ? `${randomButtonAnimation} 0.6s ease-in both` : '';

  return (
    <IconButton
      aria-label="random-avatar"
      className="tour-random"
      icon={(
        <Icon
          as={IoDiceOutline}
          boxSize={16}
          animation={spinAnimation}
          onAnimationEnd={() => setAnimation(false)}
        />
      )}
      minWidth={{ base: '70px', lg: '90px' }}
      height={{ base: '70px', lg: '90px' }}
      onClick={handleClick}
      bgColor="#EEEEEE"
    />
  );
};

RandomAvatarButton.propTypes = {
  setSelectedItems: PropTypes.func.isRequired,
  setBackgroundColor: PropTypes.func.isRequired,
  setItemColor: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    ),
  ).isRequired,
};

export default RandomAvatarButton;
