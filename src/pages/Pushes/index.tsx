import { IconButton } from '@mui/material';
import { FC } from 'react';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledMainHeading } from '../../theme/styles/StyledMainContent';
import { StyledTooltip } from '../../theme/styles/StyledTooltip';
import { EnumIcons } from '../../types';

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
        <div className='user-count'></div>
      </StyledMainHeading>
    </>
  );
};
