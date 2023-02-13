const defaultState = {
    isFetching: false,
};

export const mainReducer = (state = defaultState, action ) => {
    switch(action.type) {
      case 'START_FETCHING':
        console.log('FETCHING_STARTED!');
        return {...state, isFetching: true};
      
      case 'END_FETCHING':
        console.log('FETCHING_ENDED!');
        return {...state, isFetching: false};

      default:
        return state;
    }
  };