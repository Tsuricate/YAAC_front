const Button = {
  variants: {
    'remove-item': {
      height: { base: '80px', lg: '100px' },
      width: { base: '80px', lg: '100px' },
      bgColor: 'snow',
      borderRadius: '5px',
      boxShadow: { lg: '0px 3px 12px #151b1f' },
      cursor: 'pointer',
      color: 'gray.500',
      _focus: {
        boxShadow: 'null',
        border: '4px solid #EDA81F',
      },
    },
    'start-tutorial': {
      bgColor: 'black',
      color: 'white',
      size: 'lg',
      ariaLabel: 'Start app tutorial',
      borderRadius: '5px',
      py: '25px',
      letterSpacing: '3px',
    },
  },
};

export default Button;
