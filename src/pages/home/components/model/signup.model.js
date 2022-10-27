import * as Yup from 'yup';
import { messages, regex } from './helper.model';

export const signupValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, messages.MIN)
    .max(50, messages.MAX)
    .required(messages.COMMON('username')),
  password: Yup.string()
    .matches(regex.PASSWORD_REGEX, messages.PASSWORD)
    .required(messages.COMMON('password')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords doesn't match")
    .required(messages.COMMON('confirm password')),
  avatar: Yup.string(),
  fullName: Yup.string(),
  email: Yup.string().email(),
  cell: Yup.string().matches(regex.CELL_REGEX, 'Phone number is badly formatted'),
  gender: Yup.string(),
});

export const signupInitialValues = {
  username: '',
  password: '',
  confirmPassword: '',
  avatar: '',
  fullName: '',
  email: '',
  cell: '',
  gender: '',
};
