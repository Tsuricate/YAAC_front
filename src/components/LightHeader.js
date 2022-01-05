import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex, Text, useDisclosure, IconButton, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import TutorialStartButton from './TutorialStartButton';

const LightHeader = ({ setIsTutorialRunning }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex position="absolute" pl="2" alignItems="baseline" zIndex="1">

      <Text fontWeight="bold">YAAC</Text>
      <IconButton aria-label="Application description and tutorial" icon={<InfoOutlineIcon />} bgColor="transparent" onClick={onOpen} size="sm" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Yet Another Avatar Creator</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="1.1em" fontWeight="semibold" mb={5}>
              Welcome to YAAC !
            </Text>
            <Text>
              Create your own avatar : try making it realistic or fanciful
              and have fun personalizing each detail.
            </Text>
            <Text>
              Feel free to download it and use it anywhere you want !
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <TutorialStartButton setIsTutorialRunning={setIsTutorialRunning} closeModal={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
  );
};

LightHeader.propTypes = {
  setIsTutorialRunning: PropTypes.func.isRequired,
};

export default LightHeader;
