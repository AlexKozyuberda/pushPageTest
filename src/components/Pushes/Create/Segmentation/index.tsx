import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getIconComponent } from '../../../../helpers/getIconComponent';
import { pushAction } from '../../../../lib/redux/actions';
import { getPushSegmentOptions } from '../../../../lib/redux/selectors';
import { StyledAdditionalOptions } from '../../../../theme/styles/StyledAdditionalOptions';
import {
  StyledAddButton,
  StyledClearButton,
} from '../../../../theme/styles/StyledMainContent';
import { EnumIcons, EnumPushOptions } from '../../../../types';
import { Label } from '../../../FormElements/Label';
import { DaysAfterRow } from './DaysAfterRow';
import { DepositRow } from './DepositRow';
import { LastActivityRow } from './LastActivityRow';

export const Segmentation = ({ dialogOpen }) => {
  const pushSegmentOptions = useSelector(getPushSegmentOptions);
  const dispatch = useDispatch();
  const { unregister } = useFormContext();

  const renderComponent = (el, index, cb) => {
    switch (el) {
      case 'deposit':
        return <DepositRow index={index} handleDelete={cb} />;
      case 'days':
        return <DaysAfterRow index={index} handleDelete={cb} />;
      case 'activity':
        return <LastActivityRow index={index} handleDelete={cb} />;
      default:
        return null;
    }
  };

  const handleDelete = index => {
    const { id, segment } = pushSegmentOptions.find(item => {
      return item.index === index;
    });

    unregister(`pushSegmentation.${segment}${index}`);
    dispatch(pushAction.deletePushOptions(EnumPushOptions.segmentOptions, id));
  };

  return (
    <StyledAdditionalOptions>
      <Label label='Сегментация' tooltipText='Lorem' />
      <div className='content'>
        {pushSegmentOptions.map(item => (
          <React.Fragment key={item.index}>
            {renderComponent(item.segment, item.index, handleDelete)}
          </React.Fragment>
        ))}

        <div className='buttons'>
          <StyledAddButton onClick={dialogOpen}>
            {getIconComponent(EnumIcons.plus)}
            Добавить сегментацию
          </StyledAddButton>
          <StyledClearButton>Очистить</StyledClearButton>
        </div>
      </div>
    </StyledAdditionalOptions>
  );
};
