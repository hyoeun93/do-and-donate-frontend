import { combineReducers } from 'redux';
import authReducer from './authReducer';
import charityReducer from './charityReducer';
import userChallengeReducer from './userChallengeReducer'


export default combineReducers({
    auth: authReducer,
    charity: charityReducer,
    userChallenge: userChallengeReducer 
})