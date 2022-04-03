export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});
export const reset = () => ({
  type: 'RESET'
});

export const buttonClick = (number) => ({
  type: 'BUTTON_CLICK',
  number
});

export const inputNumber = () => ({
  type:'INPUT_NUMBER'
});

export const inputNumberChange = (number) => ({
  type: 'INPUT_NUMBER_CHANGE',
  number
});
