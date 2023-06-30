import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getIconComponent } from '../../../../helpers/getIconComponent';
import { pushAction } from '../../../../lib/redux/actions';

import { FC } from 'react';
import { generateID } from '../../../../helpers/getGenerateId';
import { getPushDateOptions } from '../../../../lib/redux/selectors';
import { data } from '../../../../mock-data/data';
import { StyledAdditionalOptions } from '../../../../theme/styles/StyledAdditionalOptions';
import {
  StyledAddButton,
  StyledClearButton,
} from '../../../../theme/styles/layout/StyledMainContent';
import { EnumIcons, EnumPushOptions } from '../../../../types';
import { Label } from '../../../FormElements/Label';
import { SelectField } from '../../../FormElements/Select';
import { DateRow } from './DateRow';

export const MailingType: FC = () => {
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

  const handleClear = () => {
    dispatch(pushAction.clearPushOptions(EnumPushOptions.dateOptions));
  };

  return (
    <StyledAdditionalOptions>
      <Label label='Выберите тип рассылки' tooltipText='Lorem' />
      <SelectField
        control={control}
        name='pushTypeDistribution'
        placeholder='Выберите пункт'
        options={data}
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

            {pushDateOptions.length > 0 && (
              <StyledClearButton onClick={handleClear}>
                Очистить
              </StyledClearButton>
            )}
          </div>
        </div>
      )}
    </StyledAdditionalOptions>
  );
};
