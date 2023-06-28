import { FormControl } from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from '../../theme/styles/StyledField';
import { Label } from './Label';

export const Input: FC<IPropTypes> = props => {
  const { register, label, placeholder, id, tooltipText } = props;

  return (
    <FormControl fullWidth>
      {label && <Label label={label} tooltipText={tooltipText} id={id} />}
      <StyledInput id={id} placeholder={placeholder} {...register} />
    </FormControl>
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
