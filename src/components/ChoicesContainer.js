import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';

const ChoicesContainer = ({ children, centerContent, showCloseButton }) => (
  <Flex overflowY="auto" flexGrow={1} bgColor="Gainsboro" flexDirection="column">
    { children }
  </Flex>
);

ChoicesContainer.propTypes = {
  children: PropTypes.element.isRequired,
  centerContent: PropTypes.bool.isRequired,
  showCloseButton: PropTypes.bool.isRequired,
};

export default ChoicesContainer;
