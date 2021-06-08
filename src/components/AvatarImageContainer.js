import React from 'react';
import { Image } from '@chakra-ui/react';

const AvatarImageContainer = ({ bodyPart }) => {
  return (
    <Image src={bodyPart} maxW="100%" maxH="100%" position="absolute" bottom="0" />
  )
}

export default AvatarImageContainer;
