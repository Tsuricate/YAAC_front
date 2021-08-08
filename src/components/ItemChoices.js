import { CloseIcon } from '@chakra-ui/icons';
import { Box, Icon, SimpleGrid, Center } from "@chakra-ui/react";
import React from 'react';

const ItemChoices = ({ items }) => {
  return (
    <>
      <SimpleGrid minChildWidth={{base: "5em", lg: "7em"}} spacing="1" >
        <Center>
          <Icon as={CloseIcon} boxSize="12" />
        </Center>
        {items.map((item) => (
          <Box key={item.id} h={{base: "5em", lg: "7em"}}  bg="green.400" />
        ))}

      </SimpleGrid>
    </>
  )
}

export default ItemChoices;
