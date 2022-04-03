const initialState = {
  count: 0,
  numberInputted: 0,
  buttonClick: 0
};
//updating state
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        buttonClick: state.buttonClick + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        buttonClick: state.buttonClick + 1

      };
    case 'RESET':
      return {
        ...state,
        count: (state.count = 0)
      };
    case 'INPUT_NUMBER_CHANGE':
      return {
        ...state,
        numberInputted: action.number
      };
    case 'INPUT_NUMBER':
      return {
        ...state,
        count: parseInt(state.numberInputted),
          numberInputted: null
      };
    default:
      return state;
  }
}

export default counterReducer;