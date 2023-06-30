import { FormHelperText, InputBase } from '@mui/material';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledField, StyledFormControl } from '../../theme/styles/StyledField';
import { Label } from './Label';

export const Input: FC<IPropTypes> = props => {
  const {
    register,
    label,
    placeholder,
    id,
    tooltipText,
    color,
    error,
    caption,
  } = props;
  // const inputStyle = {
  //   backgroundColor:
  //     bgColor === 'dark'
  //       ? theme.colors.bg.baseDark
  //       : theme.colors.field.baseLight,
  // };

  return (
    <StyledFormControl fullWidth>
      {label && (
        <Label
          label={label}
          caption={caption}
          tooltipText={tooltipText}
          id={id}
        />
      )}
      <StyledField color={color}>
        <InputBase
          id={id}
          placeholder={placeholder}
          error={!!error}
          {...register}
        />
      </StyledField>

      {!!error && <FormHelperText>{error.message}</FormHelperText>}
    </StyledFormControl>
  );
};

interface IPropTypes {
  id?: string;
  color?: string;
  caption?: string;
  tooltipText?: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}
