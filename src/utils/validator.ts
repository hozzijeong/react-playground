export const checkNumber = (value: string) => {
  const regExp = /^[0-9]+$/;

  return regExp.test(value);
};

export const checkECode = (value: string) => {
  return ['e', 'E', '+', '-', '.'].includes(value);
};
