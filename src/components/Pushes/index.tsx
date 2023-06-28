import { IconButton } from '@mui/material';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledMainHeading } from '../../theme/styles/StyledMainContent';
import { StyledTooltip } from '../../theme/styles/StyledTooltip';
import { EnumIcons } from '../../types';
import { AudienceCounter } from '../AudienceCounter';
import { CreatePushes } from './Create';

export const Pushes = () => {
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
