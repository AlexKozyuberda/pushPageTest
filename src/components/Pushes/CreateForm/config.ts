// Core
import * as yup from 'yup';

const minCharacters = 'Минимальное количество - ${min} символов';
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
  pushName: yup.string().optional(),
  pushLanguage: yup.string().optional(),
  pushIcon: yup.string().optional(),
  pushImg: yup.string().optional(),
});

export interface IPushFormShape {
  pushTitle: string;
  pushMessage: string;
  pushName?: string;
  pushLanguage?: string;
  pushImg?: string;
  pushIcon?: string;
}
