import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Icon } from '@chakra-ui/react';
import { IoDiceOutline } from 'react-icons/io5';
import { composeRandomAvatar } from '../utils/functions';

const RandomAvatarButton = ({
  setSelectedItems, setBackgroundColor, setItemColor, categories,
}) => {
  const handleRandomAvatar = () => {
    composeRandomAvatar(setSelectedItems, setBackgroundColor, setItemColor, categories);
  };
  const handleClick = () => {
    handleRandomAvatar();
  };

  return (
    <IconButton
      aria-label="random-avatar"
      icon={<Icon as={IoDiceOutline} boxSize={16} />}
      minWidth={{ base: '70px', lg: '90px' }}
      height={{ base: '70px', lg: '90px' }}
      onClick={handleClick}
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
