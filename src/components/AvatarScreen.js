import React from 'react'
import ActionButtons from './ActionButtons';
import { Box, Center } from '@chakra-ui/react';
import AvatarImageContainer from './AvatarImageContainer';
import neckShoulder from '../assets/pictures/neck-shoulder.png';
import jawline from '../assets/pictures/Jawline.png'
import ears from '../assets/pictures/ears.png'
import eyes from '../assets/pictures/EYE.png'
import eyesbrows from '../assets/pictures/Eyebrows.png'
import hairBase from '../assets/pictures/hair_base.png'
import hairSide from '../assets/pictures/Meche.png'
import mouth from '../assets/pictures/mouth.png'
import nose from '../assets/pictures/nose.png'
import bangs from '../assets/pictures/bangs.png'

const AvatarScreen = ({ setEditionMode, backgroundColor }) => {

  return (
    <Box w="100vw" h="100vw" maxHeight={{ md: "50vh", lg: "80vh" }} maxWidth={{ md:"50vh", lg: "80vh" }} position="relative" >
      
      <Box bg={backgroundColor} width="100%" height="100%">
        <Center>
          <AvatarImageContainer bodyPart={nose} />
          <AvatarImageContainer bodyPart={bangs} />
          <AvatarImageContainer bodyPart={mouth} />
          <AvatarImageContainer bodyPart={hairSide} />
          <AvatarImageContainer bodyPart={hairBase} />
          <AvatarImageContainer bodyPart={eyesbrows} />
          <AvatarImageContainer bodyPart={eyes} />
          <AvatarImageContainer bodyPart={ears} />
          <AvatarImageContainer bodyPart={jawline} />
          <AvatarImageContainer bodyPart={neckShoulder} />
        </Center>
        
      </Box>

      <Box position="absolute" bottom="4" width="100%" px="3">
        <ActionButtons setEditionMode={setEditionMode} />
      </Box>
     
    </Box>
  )
}

export default AvatarScreen;
