import { IconButton } from '@mui/material';
import { FC } from 'react';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledTooltip } from '../../theme/styles/StyledTooltip';
import { StyledMainHeading } from '../../theme/styles/layout/StyledMainContent';
import { EnumIcons } from '../../types';
import { AudienceCounter } from '../AudienceCounter';
import { CreatePushes } from './CreateForm';

export const Pushes: FC = () => {
  return (
    <>
      <StyledMainHeading>
        <div className='content'>
          <h1 className='title'>Пуши</h1>
          <div className='subtitle'>
            <p>Создать новое пуш уведомление</p>
            <StyledTooltip
              title='Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, magnam!'
            >
              <IconButton>{getIconComponent(EnumIcons.info)}</IconButton>
            </StyledTooltip>
          </div>
        </div>
        <AudienceCounter />
      </StyledMainHeading>
      <CreatePushes />
    </>
  );
};
