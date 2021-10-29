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
            <Text fontSize="1.1em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent a erat lorem. Nunc nibh elit, consectetur vehicula risus at,
              elementum porta mauris. Vivamus ullamcorper nec nibh quis porttitor.
              Donec eget consequat lectus. Praesent vitae dolor tellus. Nulla.
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
