import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import Button from './components/button';
import Heading from './components/heading';
import Text from './components/text';
import Divider from './components/divider';

const overrides = {
  ...styles,
  components: {
    Button,
    Heading,
    Text,
    Divider,
  },
};

export default extendTheme(overrides);
