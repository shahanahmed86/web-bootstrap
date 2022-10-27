export const messages = {
  MIN: 'Must be at least three (03) characters long',
  MAX: 'Must be at most fifty (50) characters or less',
  PASSWORD: `Password must be at least 8 characters long, have 1 uppercase letter, have 1 lowercase letter, and 1 number`,
  COMMON: (field) => `Please enter your ${field}`,
};

export const regex = {
  PASSWORD_REGEX: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
  CELL_REGEX:
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
};
