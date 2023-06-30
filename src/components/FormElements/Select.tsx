import { IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { generateID } from '../../helpers/getGenerateId';
import { getIconComponent } from '../../helpers/getIconComponent';
import {
  StyledField,
  StyledFormControl,
  StyledInputLabel,
} from '../../theme/styles/StyledField';
import { StyledTooltip } from '../../theme/styles/StyledTooltip';
import { EnumIcons } from '../../types';

export const SelectField: FC<IPropTypes> = props => {
  const { control, options, label, tooltipText, name, placeholder, id, color } =
    props;

  const optionsJSX = options?.map(option => {
    return (
      <MenuItem key={generateID()} value={option.value}>
        {option.label}
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
          <StyledField select color={color}>
            <Select
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
            </Select>
          </StyledField>
        )}
      />
    </StyledFormControl>
  );
};

interface IPropTypes {
  name: string;
  color?: string;
  label?: string;
  tooltipText?: string;
  id?: string;
  placeholder?: string;
  options: { label?: string; value?: string }[];
  control: Control<any, any>;
  onChange?: (event: SelectChangeEvent) => void;
  error?: {
    message?: string;
  };
}
