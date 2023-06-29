import { useEffect, useState } from 'react';
import { StyledMainHeading } from '../../../theme/styles/StyledMainContent';
import {
  StyledNotification,
  StyledPhone,
  StyledPreview,
} from '../../../theme/styles/StyledPreview';

import { useSelector } from 'react-redux';
import { getIconComponent } from '../../../helpers/getIconComponent';
import { getPreviewData } from '../../../lib/redux/selectors';
import { EnumIcons } from '../../../types';
import { MailingType } from '../Create/MailingType';

export const PreviewPushes = () => {
  const [currentHour, setCurrentHour] = useState('');
  const [currentMinute, setCurrentMinute] = useState('');
  const previewData = useSelector(getPreviewData);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentHour(date.getHours().toString().padStart(2, '0'));
      setCurrentMinute(date.getMinutes().toString().padStart(2, '0'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <StyledPreview>
      <StyledMainHeading>
        <div className='content'>
          <h2 className='title'>Превью Пуш-уведомления</h2>
        </div>
      </StyledMainHeading>

      <StyledPhone>
        <div className='container'>
          <div className='statusbar'>
            <div className='info'>
              <div className='time'>
                {currentHour}:{currentMinute}
              </div>
              <span className='notifications'></span>
            </div>
            <span className='functions'></span>
          </div>
          <StyledNotification>
            <div className='notification-heading'>
              <div className='user'>
                <div className='icon'>
                  <img src={previewData.pushIcon} alt={previewData.pushName} />
                </div>
                <ul className='list'>
                  <li>
                    <span className='name'>{previewData.pushName}</span>
                  </li>
                  <li>
                    <span className='time'>now</span>
                  </li>
                </ul>
              </div>
              <div className='button'>{getIconComponent(EnumIcons.arrow)}</div>
            </div>

            <div className='notification-content'>
              <span className='heading'>{previewData.pushTitle}</span>
              <p className='text'>{previewData.pushMessage}</p>

              {previewData.pushImg && (
                <img className='img' src={previewData.pushImg} alt='demo' />
              )}
            </div>
          </StyledNotification>
        </div>
        <div className='buttons'>
          <div className='volume'>
            <span className='control'></span>
            <span className='control'></span>
          </div>
          <div className='control'></div>
        </div>
      </StyledPhone>
      <MailingType />
    </StyledPreview>
  );
};
