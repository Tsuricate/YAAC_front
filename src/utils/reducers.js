const reducer = (state, action) => {
  const categoryDirection = state[action.category][action.direction];

  switch (action.type) {
    case 'IncrementY':
      if (categoryDirection < 5) {
        const newPosition = categoryDirection + 1;
        return {
          ...state,
          [action.category]: { ...state[action.category], [action.direction]: newPosition },
        };
      }
      return state;

    case 'DecrementY':
      if (categoryDirection > 0) {
        const newPosition = categoryDirection - 1;
        return {
          ...state,
          [action.category]: { ...state[action.category], [action.direction]: newPosition },
        };
      }
      return state;

    case 'IncrementX':
      if (categoryDirection < 5) {
        const newPosition = categoryDirection + 1;
        return {
          ...state,
          [action.category]: { ...state[action.category], [action.direction]: newPosition },
        };
      }
      return state;

    case 'DecrementX':
      if (categoryDirection <= 5 && categoryDirection > -5) {
        const newPosition = categoryDirection - 1;
        return {
          ...state,
          [action.category]: { ...state[action.category], [action.direction]: newPosition },
        };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
