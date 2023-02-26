const defaultState = {
    books: [],
    currentBook: null,
    genres: [],
    categoriesCount: [],
};

export const bookReducer = (state = defaultState, action ) => {
    switch(action.type) {
      case 'SET_BOOKS':
        return {...state, books: action.payload};
      
      case 'SET_CURRENT-BOOK':
        return {...state, currentBook: action.payload};
            
      case 'SET_GENRES':
        return {...state, genres: action.payload };
  
      default:
        return state;
    }
  };