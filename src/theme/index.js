import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import Button from './components/button';
import CloseButton from './components/closeButton';
import Heading from './components/heading';
import Text from './components/text';
import Divider from './components/divider';

const overrides = {
  ...styles,
  components: {
    Button,
    CloseButton,
    Heading,
    Text,
    Divider,
  },
};

export default extendTheme(overrides);
