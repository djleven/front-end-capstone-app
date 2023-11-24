export const FETCH = 'FETCH'
export const SET = 'SET'

function removeTimeSlotFromArray(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case SET:
        return removeTimeSlotFromArray(state, action.value)
      case FETCH:
        return state
      default:
        return state;
    }
  };

  export default availableTimesReducer