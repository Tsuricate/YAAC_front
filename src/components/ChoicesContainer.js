import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, Flex } from '@chakra-ui/react';

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
      bgColor="Gainsboro"
      flexDirection="column"
      position="relative"
      justifyContent={centerContent ? 'center' : null}
      alignItems={centerContent ? 'center' : null}
      padding={5}
    >
      {showCloseButton && <CloseButton variant="close-choices" onClick={handleCloseButton} />}
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
