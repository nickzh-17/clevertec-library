const defaultState = {
    isFetching: false,
    isErrorModalActive: false,
};

export const mainReducer = (state = defaultState, action ) => {
    switch(action.type) {
      case 'START_FETCHING':
        console.log('FETCHING_STARTED!');
        return {...state, isFetching: true};
      
      case 'END_FETCHING':
        console.log('FETCHING_ENDED!');
        return {...state, isFetching: false};

      case 'OPEN_FETCHING-ERROR':
        console.log('SOME ERROR!');
        return {...state, isErrorModalActive: true};

      case 'CLOSE_FETCHING-ERROR':
        console.log('ERROR CLOSED!');
        return {...state, isErrorModalActive: false};

      default:
        return state;
    }
  };