import { FormHelperText, InputBase } from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledField, StyledFormControl } from '../../theme/styles/StyledField';
import { Label } from './Label';

export const Textarea: FC<IPropTypes> = props => {
  const { register, label, placeholder, id, tooltipText, error } = props;

  return (
    <StyledFormControl fullWidth>
      {label && <Label label={label} tooltipText={tooltipText} id={id} />}
      <StyledField textarea>
        <InputBase
          multiline
          id={id}
          placeholder={placeholder}
          {...register}
          error={!!error}
        />
      </StyledField>

      {!!error && <FormHelperText>{error.message}</FormHelperText>}
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
