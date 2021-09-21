const Divider = {
  variants: {
    'separation-categories-items': {
      position: 'relative',
      mt: '4',
      width: '90%',
      height: '1px',
      bgGradient: 'linear-gradient(to right, transparent, white, transparent)',
      _after: {
        content: '""',
        position: 'absolute',
        top: '-7px',
        left: 'calc(50% - 7px)',
        width: '14px',
        height: '14px',
        transform: 'rotate(45deg)',
        backgroundColor: '#333333',
        borderBottom: '1px solid white',
        borderRight: '1px solid white',
      },
    },

  },
};

export default Divider;
