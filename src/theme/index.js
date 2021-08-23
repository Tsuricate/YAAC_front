import { extendTheme } from '@chakra-ui/react';
import CloseButton from './components/CloseButton';

const overrides = {
  components: {
    CloseButton,
  },
};
export default extendTheme(overrides);
