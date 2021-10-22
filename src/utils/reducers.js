const reducer = (state, action) => {
  const categoryDirection = state[action.category][action.direction];

  switch (action.type) {
    case 'Increment':
      if (categoryDirection < 1) {
        return {
          ...state,
          [action.category]: {
            ...state[action.category], [action.direction]: categoryDirection + 0.2,
          },
        };
      }
      return state;

    case 'Decrement': {
      const conditionDirectionX = action.direction === 'directionX' && categoryDirection <= 1 && categoryDirection > -1;
      const conditionDirectionY = action.direction === 'directionY' && (categoryDirection > 0 || categoryDirection > -1);

      if (conditionDirectionX || conditionDirectionY) {
        return {
          ...state,
          [action.category]: {
            ...state[action.category], [action.direction]: categoryDirection - 0.2,
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
