import { keyframes } from '@chakra-ui/react';

const randomButtonAnimation = keyframes`
0% {
  -webkit-transform: rotate(0);
          transform: rotate(0);
}
100% {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
`;

export default randomButtonAnimation;
