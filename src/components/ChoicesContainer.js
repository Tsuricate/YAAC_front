import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import customScrollbar from '../utils/scrollbarStyle';

const ChoicesContainer = ({
  children, centerContent, showCloseButton, setEditionMode, editionMode,
}) => {
  const handleCloseButton = () => {
    setEditionMode('Items');
  };

  return (
    <Flex
      overflowY="auto"
      flexGrow={1}
      position="relative"
      justifyContent={centerContent ? 'center' : null}
      alignItems={centerContent ? 'center' : null}
      padding={5}
      className="tour-items"
      height={editionMode === 'Colors' ? '60%' : '40%'}
      transition="height 0.25s"
      sx={customScrollbar}
    >
      {showCloseButton && <Button variant="close-choices" leftIcon={<ArrowBackIcon />} onClick={handleCloseButton}>Back</Button>}
      { children }
    </Flex>
  );
};

ChoicesContainer.defaultProps = {
  centerContent: true,
  showCloseButton: true,
};

ChoicesContainer.propTypes = {
  children: PropTypes.node.isRequired,
  centerContent: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  setEditionMode: PropTypes.func.isRequired,
  editionMode: PropTypes.string.isRequired,
};

export default ChoicesContainer;
