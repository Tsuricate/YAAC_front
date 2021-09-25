const Divider = {
  variants: {
    'separation-categories-items': {
      position: 'relative',
      margin: '5',
      width: '90%',
      height: '1px',
      bgGradient: 'linear-gradient(to right, transparent, white, transparent)',
      _after: {
        content: '""',
        position: 'absolute',
        top: '-6px',
        left: 'calc(50% - 7px)',
        width: '14px',
        height: '14px',
        transform: 'rotate(45deg)',
        backgroundColor: '#2A2B2A',
        borderBottom: '1px solid white',
        borderRight: '1px solid white',
      },
    },

  },
};

export default Divider;
