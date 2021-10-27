import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Icon } from '@chakra-ui/react';
import { IoDiceOutline } from 'react-icons/io5';
import { getRandomAvatar } from '../utils/axios';
import { getRandomColorForCategory } from '../utils/functions';

const RandomAvatarButton = ({ setSelectedItems, setBackgroundColor }) => {
  const handleRandomAvatar = () => {
    getRandomAvatar(setSelectedItems);
    setBackgroundColor(getRandomColorForCategory('background-color'));
  };

  return (
    <IconButton
      aria-label="random-avatar"
      icon={<Icon as={IoDiceOutline} boxSize={16} />}
      minWidth={{ base: '70px', lg: '90px' }}
      height={{ base: '70px', lg: '90px' }}
      onClick={handleRandomAvatar}
    />
  );
};

RandomAvatarButton.propTypes = {
  setSelectedItems: PropTypes.func.isRequired,
  setBackgroundColor: PropTypes.func.isRequired,
};

export default RandomAvatarButton;
