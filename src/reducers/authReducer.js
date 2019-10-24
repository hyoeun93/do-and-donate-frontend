// import {} from '../actions/types';
const initialState = {
  currentUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USERNAME_CHANGED':
        return { ...state, username: action.payload };
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };

    case 'SAVE_USER':
      console.log(action.payload)
      return { ...state, currentUser: action.payload};
    default:
      return state;
    }
};