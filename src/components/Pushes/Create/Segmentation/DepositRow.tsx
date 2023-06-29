import { IconButton } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { getIconComponent } from '../../../../helpers/getIconComponent';
import { StyledAdditionalOption } from '../../../../theme/styles/StyledAdditionalOptions';
import { EnumIcons } from '../../../../types';
import { Select } from '../../../FormElements/Select';

export const DepositRow = ({ index, handleDelete }) => {
  const { control } = useFormContext();
  return (
    <StyledAdditionalOption>
      <div className='container'>
        <Select
          bgColor='dark'
          control={control}
          name={`pushSegmentation.deposit${index}.name`}
          placeholder='Выберите пункт'
          options={[{ name: 'Был внесен депозит' }, { name: 'Lorem' }]}
        />
        <div className='options'>
          <Select
            bgColor='dark'
            control={control}
            name={`pushSegmentation.deposit${index}.answer`}
            placeholder='Выберите пункт'
            options={[{ name: 'Да' }, { name: 'Нет' }]}
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
