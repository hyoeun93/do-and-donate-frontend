
export const charityFetch = () => {
    return dispatch => {
        return fetch('http://192.168.6.96:3000/api/v1/charities')
        .then(res => res.json())
        .then(data => {
            console.log(data) 
            dispatch(fetchCharity(data))
        })
    }
}

const fetchCharity = charObj => ({
    type: 'GET_CHARITY',
    payload: charObj
})