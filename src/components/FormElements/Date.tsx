import { SelectChangeEvent } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/uk';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledField } from '../../theme/styles/StyledField';
import { EnumIcons } from '../../types';

export const Date: FC<IPropTypes> = ({ control, name, placeholder, color }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <StyledField color={color}>
              <DatePicker
                {...field}
                value={field.value || null}
                format='DD.MM.YYYY'
                onChange={value => field.onChange(value)}
                slotProps={{
                  textField: { placeholder },
                }}
                slots={{
                  openPickerIcon: () => getIconComponent(EnumIcons.calendar),
                }}
              />
            </StyledField>
          );
        }}
      />
    </LocalizationProvider>
  );
};

interface IPropTypes {
  name: string;
  placeholder?: string;
  color?: string;
  control: Control<any, any>;
  onChange?: (event: SelectChangeEvent) => void;
  error?: {
    message?: string;
  };
}
