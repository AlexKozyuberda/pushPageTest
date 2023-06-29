import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getIconComponent } from '../../../../helpers/getIconComponent';
import { pushAction } from '../../../../lib/redux/actions';

import { generateID } from '../../../../helpers/getGenerateId';
import { getPushDateOptions } from '../../../../lib/redux/selectors';
import { StyledAdditionalOptions } from '../../../../theme/styles/StyledAdditionalOptions';
import {
  StyledAddButton,
  StyledClearButton,
} from '../../../../theme/styles/StyledMainContent';
import { EnumIcons } from '../../../../types';
import { Label } from '../../../FormElements/Label';
import { Select } from '../../../FormElements/Select';
import { DateRow } from './DateRow';

export const MailingType = () => {
  const dispatch = useDispatch();
  const pushDateOptions = useSelector(getPushDateOptions);

  const { control, watch } = useFormContext();

  const handleAddRow = () => {
    dispatch(
      pushAction.setDataOptions({
        id: generateID(),
        index: pushDateOptions.length,
      })
    );
  };

  return (
    <StyledAdditionalOptions>
      <Label label='Выберите тип рассылки' tooltipText='Lorem' />
      <Select
        control={control}
        name='pushTypeDistribution'
        placeholder='Выберите пункт'
        options={[{ name: 'По дате' }, { name: 'По времени' }]}
      />

      {watch('pushTypeDistribution') && (
        <div className='content'>
          {pushDateOptions.map(item => {
            return <DateRow key={item.id} index={item.index} />;
          })}

          <div className='buttons'>
            <StyledAddButton onClick={handleAddRow}>
              {getIconComponent(EnumIcons.plus)}
              Добавить дату
            </StyledAddButton>
            <StyledClearButton>Очистить</StyledClearButton>
          </div>
        </div>
      )}
    </StyledAdditionalOptions>
  );
};
