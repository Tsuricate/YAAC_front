import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const ChoicesContainer = ({
  children, centerContent, showCloseButton, setEditionMode,
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
};

export default ChoicesContainer;
