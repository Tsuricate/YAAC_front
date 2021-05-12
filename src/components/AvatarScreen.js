import React from 'react'
import ActionButtons from './ActionButtons';
import { Box, Center } from '@chakra-ui/react';
import ImageContainer from './ImageContainer';
import neckShoulder from '../assets/pictures/neck_shoulder.png';
import jawline from '../assets/pictures/Jawline.png'
import ears from '../assets/pictures/Ears.png'
import eyes from '../assets/pictures/EYE.png'
import eyesbrows from '../assets/pictures/Eyebrows.png'
import hairBase from '../assets/pictures/hair_base.png'
import hairSide from '../assets/pictures/Meche.png'
import mouth from '../assets/pictures/mouth.png'
import nose from '../assets/pictures/nose.png'

const AvatarScreen = () => {
  return (
    <Box w="100vw" h="100vw" maxHeight={{ md: "50vh", lg: "80vh" }} maxWidth={{ md:"50vh", lg: "80vh" }} position="relative">

      <Box bg="gray.300" width="100%" height="100%">
        <Center>
          <ImageContainer bodyPart={nose} />
          <ImageContainer bodyPart={mouth} />
          <ImageContainer bodyPart={hairSide} />
          <ImageContainer bodyPart={hairBase} />
          <ImageContainer bodyPart={eyesbrows} />
          <ImageContainer bodyPart={eyes} />
          <ImageContainer bodyPart={ears} />
          <ImageContainer bodyPart={jawline} />
          <ImageContainer bodyPart={neckShoulder} />
        </Center>
        
      </Box>

      <Box position="absolute" bottom="4" width="100%" px="3">
        <ActionButtons />
      </Box>
     
    </Box>
  )
}

export default AvatarScreen;
