import { useEffect, useState } from 'react';
import { StyledMainHeading } from '../../../theme/styles/StyledMainContent';
import {
  StyledNotification,
  StyledPhone,
  StyledPreview,
} from '../../../theme/styles/StyledPreview';

import defaultIcon from '../../../assets/default-icon.svg';
import { getIconComponent } from '../../../helpers/getIconComponent';
import { EnumIcons } from '../../../types';

export const PreviewPushes = ({ watch }) => {
  const [currentHour, setCurrentHour] = useState('');
  const [currentMinute, setCurrentMinute] = useState('');

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
                  <img src={watch('pushIcon') || defaultIcon} alt='' />
                </div>
                <ul className='list'>
                  <li>
                    <span className='name'>Push name</span>
                  </li>
                  <li>
                    <span className='time'>now</span>
                  </li>
                </ul>
              </div>
              <div className='button'>{getIconComponent(EnumIcons.arrow)}</div>
            </div>

            <div className='notification-content'>
              <span className='title'>{watch('pushTitle')}</span>
              <p className='text'>{watch('pushMessage')}</p>
              {watch('pushImg') && (
                <img className='img' src={watch('pushImg')} alt='' />
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
    </StyledPreview>
  );
};
