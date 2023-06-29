import { IconButton, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { getIconComponent } from '../../helpers/getIconComponent';
import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
} from '../../theme/styles/StyledField';
import { StyledTooltip } from '../../theme/styles/StyledTooltip';
import { EnumIcons } from '../../types';

export const Select: FC<IPropTypes> = props => {
  const {
    control,
    options,
    label,
    tooltipText,
    name,
    placeholder,
    id,
    bgColor,
  } = props;

  const optionsJSX = options?.map(({ name }) => {
    return (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    );
  });
  return (
    <StyledFormControl fullWidth>
      {label && (
        <StyledInputLabel id={id} shrink>
          {label}
          {tooltipText && (
            <StyledTooltip title={tooltipText}>
              <IconButton>{getIconComponent(EnumIcons.info)}</IconButton>
            </StyledTooltip>
          )}
        </StyledInputLabel>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <StyledSelect
            theme={bgColor}
            labelId={id}
            onChange={e => {
              field.onChange(e.target.value);
            }}
            value={field.value || ''}
            displayEmpty
            IconComponent={() => getIconComponent(EnumIcons.choiceArrow)}
          >
            {placeholder && (
              <MenuItem value='' disabled>
                <span className='placeholder'>{placeholder}</span>
              </MenuItem>
            )}
            {optionsJSX}
          </StyledSelect>
        )}
      />
    </StyledFormControl>
  );
};

interface IPropTypes {
  name: string;
  bgColor?: string;
  label?: string;
  tooltipText?: string;
  id?: string;
  placeholder?: string;
  options: { name?: string }[];
  control: Control<FieldValues, any>;
  onChange?: (event: SelectChangeEvent) => void;
  error?: {
    message?: string;
  };
}
