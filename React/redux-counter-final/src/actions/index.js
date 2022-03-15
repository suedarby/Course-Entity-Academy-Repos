export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const reset = () => ({
  type: 'RESET'
});

export const onInputNumber = () => ({
  type:' INPUT_NUMBER'
});

export const onInputNumberChange = (number) => ({
  type: 'INPUT_NUMBER_CHANGE',
  number
});