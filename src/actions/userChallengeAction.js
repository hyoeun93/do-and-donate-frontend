

// export const fetchUserChallenge = (userId) => {
//     return dispatch => {
//         return fetch(`http://10.9.111.98:3000/api/v1/users/${userId}.id/user_challenges`, {
//             method: 'POST',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(this.props.navigation.state.params.details)
//             })
//             .then(res => res.json())
//             .then(data => {
//               console.log(data)
//               dispatch(fetchUserChallenge(data.data))
              
//             });
//     }  
// }

// export const fetchUserChallenge = (userId) => {
//   return dispatch => {
//       return fetch(`http://localhost:3000/api/v1/users/${userId}/user_challenges`, {
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(this.props.navigation.state.params.details)
//           })
//           .then(res => res.json())
//           .then(data => {
//             console.log(data)
//             dispatch(fetchUserChallenge(data))
            
//           });
//   }  
// }

const fetchUserChallenge = data => ({
    type: 'GET_USER_CHALLENGE',
    payload: data
})