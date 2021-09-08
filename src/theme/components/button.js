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
        border: '4px solid #3bad98',
      },
    },
  },
};

export default Button;
