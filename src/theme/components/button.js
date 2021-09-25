const Button = {
  variants: {
    'remove-item': {
      height: { base: '80px', lg: '100px' },
      width: { base: '80px', lg: '100px' },
      bgColor: '#EEEEEE',
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
      backgroundColor: '#000',
      border: '1px solid #000',
      borderRadius: '4px',
      size: 'lg',
      ariaLabel: 'Start app tutorial',
      boxShadow: '#fff 4px 4px 0 0,#000 4px 4px 0 1px',
      color: '#fff',
      letterSpacing: '2px',
    },
    'close-choices': {
      position: 'absolute',
      top: '0',
      right: '0',
      margin: '10px',
      size: 'lg',
      color: '#EDA81F',
      border: '2px solid #EDA81F',
      borderRadius: '5px',
    },
  },
};

export default Button;
