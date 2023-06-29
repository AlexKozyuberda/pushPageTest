import { SelectChangeEvent } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledDatePicker } from '../../theme/styles/StyledField';
import { EnumIcons } from '../../types';
dayjs.locale('uk');

export const Date: FC<IPropTypes> = ({ control, name, placeholder }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <StyledDatePicker
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
          );
        }}
      />
    </LocalizationProvider>
  );
};

interface IPropTypes {
  name: string;
  bgColor?: string;
  placeholder?: string;
  control: Control<FieldValues, any>;
  onChange?: (event: SelectChangeEvent) => void;
  error?: {
    message?: string;
  };
}
