const defaultState = {
    books: [],
};

export const bookReducer = (state = defaultState, action ) => {
    switch(action.type) {
      case 'SET_BOOKS':
        return {...state, books: action.payload};

      case 'ADD_BOOK':
        return {...state, books: [...state.books, action.payload] }
        
      case 'GET_BOOKS':
        return state.books;

      case 'GET_BOOK':
        return state.books.find( (book) => book.id === action.payload );
  
  
      default:
        return state;
    }
  };