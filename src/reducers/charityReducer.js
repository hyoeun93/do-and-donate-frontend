
const initialState = {
    charities: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CHARITY':
        console.log('charityReducer', action.payload)
        return { ...state, charities: action.payload};
      default:
        return state;
      }
  };