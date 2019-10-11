// import {} from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
  }
  