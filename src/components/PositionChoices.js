import React from 'react';
import RoundButton from './RoundButton';
import { Flex, SimpleGrid, Box } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

const PositionChoices = () => {

  return (
    <Flex flexDirection="column" bgColor="Gainsboro" flexGrow={1} justifyContent="center" alignItems="center">
      <SimpleGrid columns={3} spacing={4}>
        <Box />
        <RoundButton icon={<ArrowUpIcon />} color="gray" ariaLabel="Move up element"/>
        <Box />
        <RoundButton icon={<ArrowBackIcon />} color="gray" ariaLabel="Move element to the left" />
        <Box />
        <RoundButton icon={<ArrowForwardIcon />} color="gray" ariaLabel="Move element to the right" />
        <Box />
        <RoundButton icon={<ArrowDownIcon />} color="gray" ariaLabel="Move down element "/>
        <Box />
      </SimpleGrid>
    </Flex>
  )
}

export default PositionChoices;
