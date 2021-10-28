import { keyframes } from '@chakra-ui/react';

export const randomButtonAnimation = keyframes`
0% {
  -webkit-transform: rotate(0);
          transform: rotate(0);
}
100% {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}`;

export const itemChoicesAnimation = keyframes`
0% {
  -webkit-transform: rotateY(-70deg);
          transform: rotateY(-70deg);
  -webkit-transform-origin: left;
          transform-origin: left;
  opacity: 0;
}
100% {
  -webkit-transform: rotateY(0);
          transform: rotateY(0);
  -webkit-transform-origin: left;
          transform-origin: left;
  opacity: 1;
}`;

export const removeItemButtonAnimation = keyframes`
0% {
  -webkit-transform: translateX(-50px);
          transform: translateX(-50px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}`;
