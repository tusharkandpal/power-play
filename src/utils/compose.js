export const compose = (state, ...functions) => {
  
  return (filters) => {
    return functions.reduce((acc, fn) => fn(acc, filters), state);
  };
};
