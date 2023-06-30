import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getIconComponent } from '../../../../helpers/getIconComponent';
import { pushAction } from '../../../../lib/redux/actions';
import { getPushSegmentOptions } from '../../../../lib/redux/selectors';
import { EnumIcons, EnumPushOptions, ISegmentOption } from '../../../../types';

import { StyledAdditionalOptions } from '../../../../theme/styles/StyledAdditionalOptions';
import {
  StyledAddButton,
  StyledClearButton,
} from '../../../../theme/styles/layout/StyledMainContent';

import { Label } from '../../../FormElements/Label';
import { DaysAfterRow } from './DaysAfterRow';
import { DepositRow } from './DepositRow';
import { LastActivityRow } from './LastActivityRow';

interface SegmentationProps {
  dialogOpen: () => void;
}

export const Segmentation: FC<SegmentationProps> = ({ dialogOpen }) => {
  const pushSegmentOptions = useSelector(getPushSegmentOptions);
  const dispatch = useDispatch();
  const { unregister } = useFormContext();

  const renderComponent = (
    el: string,
    index: number,
    cb: (index: number) => void
  ) => {
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

  const handleDelete = (index: number) => {
    const { id, segment } = pushSegmentOptions.find(
      item => item.index === index
    ) as ISegmentOption;

    unregister(`pushSegmentation.${segment}${index}`);
    dispatch(pushAction.deletePushOptions(EnumPushOptions.segmentOptions, id));
  };

  const handleClear = () => {
    dispatch(pushAction.clearPushOptions(EnumPushOptions.segmentOptions));
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
          <StyledClearButton onClick={handleClear}>Очистить</StyledClearButton>
        </div>
      </div>
    </StyledAdditionalOptions>
  );
};
