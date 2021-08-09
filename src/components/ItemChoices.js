import { CloseIcon } from '@chakra-ui/icons';
import { Image, Icon, SimpleGrid, Center, Skeleton } from "@chakra-ui/react";
import React from 'react';

const ItemChoices = ({ items }) => {
  return (
    <SimpleGrid minChildWidth={{base: "5em", lg: "7em"}} spacing="1" >
      <Center>
        <Icon as={CloseIcon} boxSize="12" />
      </Center>
      {items.map((item) => (
        <Image 
          src={item.imageUrl} 
          alt={item.id}
          key={item.id} 
          fallback={<Skeleton h={{base: "5em", lg: "7em"}}/>}
          h={{base: "5em", lg: "7em"}}  
          border={{lg: "1px solid black"}}
        />
      ))}
    </SimpleGrid>
  )
}

export default ItemChoices;
