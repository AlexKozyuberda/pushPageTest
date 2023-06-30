import { IconButton } from '@mui/material';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getIconComponent } from '../../../../helpers/getIconComponent';
import { pushAction } from '../../../../lib/redux/actions';
import { DateOption } from '../../../../lib/redux/reducers/push';
import { getPushDateOptions } from '../../../../lib/redux/selectors';
import { StyledAdditionalOption } from '../../../../theme/styles/StyledAdditionalOptions';
import { EnumIcons, EnumPushOptions } from '../../../../types';
import { Date } from '../../../FormElements/Date';
import { Time } from '../../../FormElements/Time';

interface DateRowProps {
  index: number;
}

export const DateRow: FC<DateRowProps> = ({ index }) => {
  const { control, unregister } = useFormContext();
  const pushDateOptions = useSelector(getPushDateOptions);
  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    const { id } =
      pushDateOptions.find((item: DateOption | undefined) => {
        return item?.index === index;
      }) || {};

    unregister(`pushDates.mailing${index}`);
    dispatch(pushAction.deletePushOptions(EnumPushOptions.dateOptions, id));
  };

  return (
    <StyledAdditionalOption className='date' key={index}>
      <div className='container'>
        <div className='options'>
          <Date
            control={control}
            name={`pushDates.mailing${index}.date`}
            placeholder='дд.мм.гггг'
            color='dark'
          />
          <Time
            control={control}
            name={`pushDates.mailing${index}.time`}
            placeholder='--:--'
            color='dark'
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
