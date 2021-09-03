const reducer = (state, action) => {
  const categoryDirection = state[action.category][action.direction];

  switch (action.type) {
    case 'Increment':
      if (categoryDirection < 5) {
        return {
          ...state,
          [action.category]: {
            ...state[action.category], [action.direction]: categoryDirection + 1,
          },
        };
      }
      return state;

    case 'Decrement': {
      const conditionDirectionX = action.direction === 'directionX' && categoryDirection <= 5 && categoryDirection > -5;
      const conditionDirectionY = action.direction === 'directionY' && categoryDirection > 0;

      if (conditionDirectionX || conditionDirectionY) {
        return {
          ...state,
          [action.category]: {
            ...state[action.category], [action.direction]: categoryDirection - 1,
          },
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
