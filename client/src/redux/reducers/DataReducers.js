export const BookReducers = (
    state = {
      bookData: [],
      displayEdit: false,
      loading: false,
      error: null
    }, action
  ) => {
    switch (action.type) {
      case "FETCH_BOOKDATA":
        return {
          ...state,
          bookData:  action.payload
      }
      case "DISPLAY_EDITDATA":
        return {
          ...state,
          displayEdit: action.payload
        }
    default:
        return state;
    }
  };
  
  export const DisplayReducers = (
    state = {
      displayEdit: false,
    }, action
  ) => {
    switch (action.type) {
      case "DISPLAY_EDITDATA":
        state ={
          ...state,
          displayEdit: action.payload
        }
    default:
        return state;
    }
  };

  export const AuthorReducers = (
    state = {
      authorData: [],
      loading: false,
      error: null
    }, action
  ) => {
    switch (action.type) {
      case "FETCH_AUTHORDATA":
        state = {
          ...state,
          authorData: action.payload
        };
      default:
        return state;
    }
  };
  

  