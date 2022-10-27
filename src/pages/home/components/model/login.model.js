import * as Yup from 'yup';
import { messages } from './helper.model';

export const loginValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, messages.MIN)
    .max(50, messages.MAX)
    .required(messages.COMMON('username')),
  password: Yup.string().required(messages.COMMON('password')),
});

export const loginInitialValues = { username: '', password: '' };
