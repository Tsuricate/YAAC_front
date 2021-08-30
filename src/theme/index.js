import { extendTheme } from '@chakra-ui/react';
import Button from './components/button';
import CloseButton from './components/closebutton';

const overrides = {
  components: {
    Button,
    CloseButton,
  },
};
export default extendTheme(overrides);
