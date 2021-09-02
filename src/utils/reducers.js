const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      if (state[action.category] < 10) {
        return { ...state, [action.category]: state[action.category] + 1 };
      }

      return state;

    case 'Decrement':
      if (state[action.category] > 0) {
        return { ...state, [action.category]: state[action.category] - 1 };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
