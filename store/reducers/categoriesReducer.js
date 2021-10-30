import booksData from '../../books';

const initialState = {
  books: booksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_COOKIE':
      const cookiesToKeep = state.cookies.filter(
        cookie => cookie.id !== action.payload.cookieId,
      );
      return {
        ...state,
        cookies: cookiesToKeep, //copy all of the old state, and only manipulate the part we want to manipulate.
      };
    default:
      return state;
  }
};

export default reducer;
