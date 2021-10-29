const customScrollbar = {
  '&::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '10px',
    background: 'transparent',
    boxShadow: '0 0 1px 1px #111',
  },
};

export default customScrollbar;
