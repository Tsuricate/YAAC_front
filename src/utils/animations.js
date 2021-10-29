import { keyframes } from '@chakra-ui/react';

export const randomButtonAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`;

export const itemChoicesAnimation = keyframes`
0% {
  -webkit-transform: rotateX(-100deg);
          transform: rotateX(-100deg);
  -webkit-transform-origin: top;
          transform-origin: top;
  opacity: 0;
}
100% {
  -webkit-transform: rotateX(0deg);
          transform: rotateX(0deg);
  -webkit-transform-origin: top;
          transform-origin: top;
  opacity: 1;
}
`;

export const removeItemButtonAnimation = keyframes`
0% {
  -webkit-transform: rotateY(100deg);
          transform: rotateY(100deg);
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
}
`;

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

export const fullAvatarAnimation = keyframes`
  0% {
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0.7;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

export const choicesAnimation = keyframes`
0% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
50% {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
`;

export const changeColors = keyframes`
0% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
`;
