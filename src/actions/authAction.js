import { AsyncStorage } from 'react-native';

export const usernameChanged = (username) => {
    return {
      type: 'USERNAME_CHANGED',
      payload: username
    };
  };

export const emailChanged = (email) => {
    return {
      type: 'EMAIL_CHANGED',
      payload: email
    };
  };

export const passwordChanged = (password) => {
    return {
      type: 'PASSWORD_CHANGED',
      payload: password
    };
  };

export const userLoginFetch = user => {
  
  return dispatch => {
    return fetch("http://192.168.6.96:3000/api/v1/authenticate", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
      })
      .then(res => res.json())
      .then(data => {
        if(data.error) {
          console.log('error')
        } else {
          AsyncStorage.setItem("token", data.token)
          dispatch(loginUser(data.currentUser))
        }
      })
  }
  
}

export const saveUser = user => {
  // debugger 
      alert('You are Signed-Up!');
      return dispatch => {
        return fetch('http://192.168.6.96:3000/api/v1/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user})
         })
        .then(response => response.json())
        .then(data => { 
           AsyncStorage.setItem("token", data.token)
              dispatch(loginUser(data.currentUser))
        });
        
    }   
}

const loginUser = userObj => ({
  type: 'SAVE_USER',
  payload: userObj
})
