import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledFormControl, StyledInput } from '../../theme/styles/StyledField';
import { theme } from '../../theme/variables';
import { Label } from './Label';

export const Input: FC<IPropTypes> = props => {
  const { register, label, placeholder, id, tooltipText, bgColor } = props;
  const inputStyle = {
    backgroundColor:
      bgColor === 'dark'
        ? theme.colors.bg.baseDark
        : theme.colors.field.baseLight,
  };

  return (
    <StyledFormControl fullWidth>
      {label && <Label label={label} tooltipText={tooltipText} id={id} />}
      <StyledInput
        style={inputStyle}
        id={id}
        placeholder={placeholder}
        {...register}
      />
    </StyledFormControl>
  );
};

interface IPropTypes {
  id?: string;
  bgColor?: string | undefined;
  tooltipText?: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}
