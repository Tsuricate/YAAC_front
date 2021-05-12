import { CloseIcon } from '@chakra-ui/icons';
import { Box, Icon, SimpleGrid, Center } from "@chakra-ui/react";
import React from 'react';

const ItemChoices = () => {
  return (
    <>
      <SimpleGrid  minChildWidth={{base: "5em", lg: "7em"}} spacing="1" flexWrap="wrap">
        <Center>
          <Icon as={CloseIcon} boxSize="12" />
        </Center>
        <Box h={{base: "5em", lg: "7em"}}  bg="green.400" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.500" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.600" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.700" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.200" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.600" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.700" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.700" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.200" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.600" />
        <Box h={{base: "5em", lg: "7em"}}  bg="green.700" />
      </SimpleGrid>
    </>
  )
}

export default ItemChoices;
