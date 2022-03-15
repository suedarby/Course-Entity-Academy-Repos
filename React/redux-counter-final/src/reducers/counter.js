const initialState = {
  count: 0, 
  numberInputted: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    case 'RESET':
      return {
        ...state,
        count: (state.count = 0)
      };
    case 'INPUT_NUMBER':
      return {
...state,
count:parseInt(state.numberInputted),
numberInputted: null
      };
    case 'INPUT_NUMBER_CHANGE':
      return {
...state,
numberInputted:action.number
      };
    default:
      return state;
  }
}

export default counterReducer;