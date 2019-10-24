
const initialState = {
    pictures: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_PICTURE':
        console.log('pictureReducer', action.payload)
        return { ...state, pictures: action.payload};
      case 'PICTURE_UPLOAD_FAILED':
          return {...state};
      default:
        return state;
      }
  };