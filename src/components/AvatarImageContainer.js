import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';

const AvatarImageContainer = ({ bodyPart }) => (
  <Image src={bodyPart} maxW="100%" maxH="100%" position="absolute" bottom="0" />
);

AvatarImageContainer.propTypes = {
  bodyPart: PropTypes.string.isRequired,
};

export default AvatarImageContainer;
