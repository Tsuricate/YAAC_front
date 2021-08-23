import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import {
  ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, ArrowDownIcon,
} from '@chakra-ui/icons';
import RoundButton from './RoundButton';

const PositionChoices = () => (
  <>
    <SimpleGrid columns={3} spacing={4}>
      <Box />
      <RoundButton icon={<ArrowUpIcon />} color="gray" ariaLabel="Move up element" />
      <Box />
      <RoundButton icon={<ArrowBackIcon />} color="gray" ariaLabel="Move element to the left" />
      <Box />
      <RoundButton icon={<ArrowForwardIcon />} color="gray" ariaLabel="Move element to the right" />
      <Box />
      <RoundButton icon={<ArrowDownIcon />} color="gray" ariaLabel="Move down element " />
      <Box />
    </SimpleGrid>
  </>
);

export default PositionChoices;
