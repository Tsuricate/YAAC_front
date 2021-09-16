const Heading = {
  variants: {
    'main-title': {
      fontSize: '8xl',
      letterSpacing: '15px',
      textDecoration: 'none',
      backgroundImage: 'linear-gradient(to right, #EDA81F 0, #C7BCA7 100%)',
      backgroundSize: '0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background .5s',
      backgroundPosition: '0 0.2em',
      boxShadow: 'inset 0 0.8em 0 0 #F7F6F4',
      _hover: {
        backgroundSize: '100% 100%',
      },
    },
  },
};

export default Heading;
