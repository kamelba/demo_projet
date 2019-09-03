const initialState = {
    user: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          user: action.payload
        };
        case "GET_ANNONCE":
          return {
            ...state,
            annonce: action.payload
          };
    

      default:
        return state;
    }
  }
  