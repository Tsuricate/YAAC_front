import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import Button from './components/button';
import CloseButton from './components/closebutton';

const overrides = {
  ...styles,
  components: {
    Button,
    CloseButton,
  },
};

export default extendTheme(overrides);
