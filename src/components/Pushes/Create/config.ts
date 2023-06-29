// Core
import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const minCharacters = 'Минимальное количество - ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const maxCharacters = 'Максимальное количество - ${max} символов';

export const pushSchema: yup.ObjectSchema<IPushFormShape> = yup.object({
  pushTitle: yup
    .string()
    .max(50, maxCharacters)
    .min(5, minCharacters)
    .required('*'),
  pushMessage: yup
    .string()
    .min(3, minCharacters)
    .max(50, maxCharacters)
    .required('*'),
});

export interface IPushFormShape {
  pushTitle?: string;
  pushMessage?: string;
}
