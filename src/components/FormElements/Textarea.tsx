import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  StyledFormControl,
  StyledTextarea,
} from '../../theme/styles/StyledField';
import { Label } from './Label';

export const Textarea: FC<IPropTypes> = props => {
  const { register, label, placeholder, id, tooltipText } = props;

  return (
    <StyledFormControl fullWidth>
      {label && <Label label={label} tooltipText={tooltipText} id={id} />}
      <StyledTextarea
        multiline
        id={id}
        placeholder={placeholder}
        {...register}
      />
    </StyledFormControl>
  );
};

interface IPropTypes {
  id?: string;
  tooltipText?: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}
