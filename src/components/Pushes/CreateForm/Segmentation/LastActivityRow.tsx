import { IconButton } from '@mui/material';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { getIconComponent } from '../../../../helpers/getIconComponent';
import { data } from '../../../../mock-data/data';
import { StyledAdditionalOption } from '../../../../theme/styles/StyledAdditionalOptions';
import { EnumIcons, ISegmentation } from '../../../../types';
import { Input } from '../../../FormElements/Input';
import { SelectField } from '../../../FormElements/Select';

export const LastActivityRow: FC<ISegmentation> = ({ index, handleDelete }) => {
  const { control, register } = useFormContext();

  return (
    <StyledAdditionalOption>
      <div className='container'>
        <SelectField
          color='dark'
          control={control}
          name={`pushSegmentation.activity${index}.name`}
          placeholder='Выберите пункт'
          options={data}
        />
        <div className='options'>
          <SelectField
            color='dark'
            control={control}
            name={`pushSegmentation.activity${index}.more`}
            placeholder='Выберите пункт'
            options={data}
          />
          <Input
            color='dark'
            placeholder='Колличество'
            register={register(`pushSegmentation.activity${index}.count`)}
          />
        </div>
      </div>
      <div className='delete'>
        <IconButton onClick={() => handleDelete(index)}>
          {getIconComponent(EnumIcons.trash)}
        </IconButton>
      </div>
    </StyledAdditionalOption>
  );
};
