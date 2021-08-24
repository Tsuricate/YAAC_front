import React from 'react';
import PropTypes from 'prop-types';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import { Image } from '@chakra-ui/react';
import customizableItemsMapping from '../data/customizableItemsMapping';

const AvatarImageContainer = ({ bodyPart, itemColor, currentCategory }) => (

  bodyPart.includes('svg')
    ? (
      <SvgLoader path={bodyPart} position="absolute" bottom="0">
        <SvgProxy
          selector={`#${customizableItemsMapping[currentCategory]}`}
          fill={itemColor[currentCategory]}
        />
      </SvgLoader>
    )
    : <Image src={bodyPart} maxW="100%" maxH="100%" position="absolute" bottom="0" />
);

AvatarImageContainer.propTypes = {
  bodyPart: PropTypes.string.isRequired,
  itemColor: PropTypes.objectOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default AvatarImageContainer;
