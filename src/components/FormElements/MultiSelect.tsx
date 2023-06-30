import {
  Autocomplete,
  Chip,
  IconButton,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { FC, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { getIconComponent } from '../../helpers/getIconComponent';
import {
  StyledField,
  StyledFormControl,
  StyledLabelContainer,
} from '../../theme/styles/StyledField';
import { StyledClearButton } from '../../theme/styles/layout/StyledMainContent';
import { EnumIcons } from '../../types';
import { Label } from './Label';

export const MultiSelect: FC<IPropTypes> = props => {
  const { control, options, name, label, tooltipText, placeholder } = props;
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  const isOptionEqualToValue = (option: OptionType, value: OptionType) => {
    return option.value === value.value && option.label === value.label;
  };

  const handleOptionChange = (newValue: OptionType[]) => {
    setSelectedOptions(newValue);
  };

  const handleClearSelection = () => {
    setSelectedOptions([]);
  };

  return (
    <StyledFormControl fullWidth>
      {label && (
        <StyledLabelContainer>
          <Label label={label} tooltipText={tooltipText} />

          {selectedOptions.length > 0 && (
            <StyledClearButton onClick={handleClearSelection}>
              Очистить
            </StyledClearButton>
          )}
        </StyledLabelContainer>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field: { onChange } }) => (
          <Autocomplete
            multiple
            options={options}
            getOptionLabel={option => option.label}
            value={selectedOptions}
            popupIcon={getIconComponent(EnumIcons.choiceArrow)}
            onChange={(_, newValue) => {
              handleOptionChange(newValue);
              onChange(newValue);
            }}
            isOptionEqualToValue={isOptionEqualToValue}
            renderTags={value =>
              value.map((option: OptionType, index: number) => (
                <Chip
                  key={option.value}
                  label={option.label}
                  onDelete={() => {
                    const newOptions = [...selectedOptions];
                    newOptions.splice(index, 1);
                    handleOptionChange(newOptions);
                    onChange(newOptions);
                  }}
                  deleteIcon={
                    <IconButton>{getIconComponent(EnumIcons.close)}</IconButton>
                  }
                />
              ))
            }
            renderInput={params => (
              <StyledField multiSelect>
                <TextField {...params} placeholder={placeholder} />
              </StyledField>
            )}
          />
        )}
      />
    </StyledFormControl>
  );
};

interface OptionType {
  value: string;
  label: string;
}

interface IPropTypes {
  name: string;
  label?: string;
  tooltipText?: string;
  placeholder?: string;
  options: OptionType[];
  control: Control<any, any>;
  onChange?: (event: SelectChangeEvent<OptionType[]>) => void;
  error?: {
    message?: string;
  };
}
