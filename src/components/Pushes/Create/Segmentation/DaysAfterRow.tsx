import { IconButton } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { getIconComponent } from '../../../../helpers/getIconComponent';
import { StyledAdditionalOption } from '../../../../theme/styles/StyledAdditionalOptions';
import { EnumIcons } from '../../../../types';
import { Input } from '../../../FormElements/Input';
import { Select } from '../../../FormElements/Select';

export const DaysAfterRow = ({ index, handleDelete }) => {
  const { control, register } = useFormContext();
  return (
    <StyledAdditionalOption>
      <div className='container'>
        <Select
          bgColor='dark'
          control={control}
          name={`pushSegmentation.days${index}.name`}
          placeholder='Выберите пункт'
          options={[{ name: 'Дней после действия' }, { name: 'Lorem' }]}
        />
        <div className='options'>
          <Select
            bgColor='dark'
            control={control}
            name={`pushSegmentation.days${index}.register`}
            placeholder='Выберите пункт'
            options={[{ name: 'Регистрация' }, { name: 'Нет' }]}
          />
          <Select
            bgColor='dark'
            control={control}
            name={`pushSegmentation.days${index}.more`}
            placeholder='Выберите пункт'
            options={[{ name: 'Больше' }, { name: 'Нет' }]}
          />
          <Input
            bgColor='dark'
            placeholder='Колличество'
            register={register(`pushSegmentation.days${index}.count`)}
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
