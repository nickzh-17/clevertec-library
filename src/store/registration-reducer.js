const defaultState = {
  step: 1,
  maxStep: 3,
  data: {},
};

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_STEP':
      return { ...state, step: action.payload };

    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };

    case 'ADD_DATA':
      return { ...state, data: { ...state.data, [action.payload.parameter]: action.payload.value } };

    default:
      return state;
  }
};
