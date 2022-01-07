import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading, Text, Flex, Stack,
} from '@chakra-ui/react';
import TutorialStartButton from './TutorialStartButton';

const Header = ({ setIsTutorialRunning, setItems }) => (
  <Flex
    height={{ lg: '100%' }}
    width={{ lg: '17%' }}
    m="5"
    flexDirection="column"
    justifyContent="space-around"
    alignItems="center"
  >
    <Heading lineHeight="0.8" textAlign="center">
      <Text fontFamily="Life Savers" fontSize={{ lg: '0.5em', xl: '0.7em' }} textTransform="uppercase">Yet Another</Text>
      <Text fontSize={{ lg: '1.5em', '2xl': '2.2em' }}>Avatar Creator</Text>
    </Heading>
    <Stack>
      <Text fontSize={{ lg: '1.2em' }} textAlign="center" fontWeight="semibold" mb={5}>
        Welcome to YAAC !
      </Text>
      <Text>
        Create your own avatar : try making it realistic or fanciful
        and have fun personalizing each detail.
      </Text>
      <Text>
        Feel free to download it and use it anywhere you want !
      </Text>
    </Stack>

    <TutorialStartButton setIsTutorialRunning={setIsTutorialRunning} setItems={setItems} />

  </Flex>

);

Header.propTypes = {
  setIsTutorialRunning: PropTypes.func.isRequired,
  setItems: PropTypes.func.isRequired,
};

const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;
