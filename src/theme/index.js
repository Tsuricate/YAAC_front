import { extendTheme } from '@chakra-ui/react';
import Image from './components/image';

const overrides = {
  components: {
    Image,
  },
};
export default extendTheme(overrides);
