import { StyledPreview } from '../../../theme/styles/StyledPreview';
import { StyledMainHeading } from '../../../theme/styles/layout/StyledMainContent';

import { useMediaQuery } from '@mui/material';
import { FC } from 'react';
import { EnumBreakpoints } from '../../../types';
import { MailingType } from '../CreateForm/MailingType';
import { PreviewPhone } from './PreviewPhone';

export const PreviewPushes: FC = () => {
  const isDesktopScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.desktopMedium})`
  );

  return (
    <StyledPreview>
      <StyledMainHeading>
        <div className='content'>
          <h2 className='title'>Превью Пуш-уведомления</h2>
        </div>
      </StyledMainHeading>
      <PreviewPhone />
      {isDesktopScreen && <MailingType />}
    </StyledPreview>
  );
};
