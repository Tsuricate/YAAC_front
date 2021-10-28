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

export const actionButtonsAnimation = keyframes`
0% {
  -webkit-transform: scale(0);
          transform: scale(0);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
  opacity: 0;
}
38% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
  opacity: 1;
}
55% {
  -webkit-transform: scale(0.7);
          transform: scale(0.7);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
72% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
81% {
  -webkit-transform: scale(0.84);
          transform: scale(0.84);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
89% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
95% {
  -webkit-transform: scale(0.95);
          transform: scale(0.95);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
`;
