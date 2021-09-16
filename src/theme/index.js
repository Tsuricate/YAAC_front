import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import Button from './components/button';
import CloseButton from './components/closebutton';
import Heading from './components/heading';

const overrides = {
  ...styles,
  components: {
    Button,
    CloseButton,
    Heading,
  },
};

export default extendTheme(overrides);
