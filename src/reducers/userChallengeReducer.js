const initialState = {
    userChallenges: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USER_CHALLENGE':
          console.log('userchallenge', action.payload)
        return { ...state, userChallenges: action.payload};
      default:
        return state;
      }
  };