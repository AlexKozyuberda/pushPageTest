import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getIconComponent } from '../../../../helpers/getIconComponent';
import { getPreviewData } from '../../../../lib/redux/selectors';
import { EnumIcons } from '../../../../types';

import {
  StyledNotification,
  StyledPhone,
} from '../../../../theme/styles/StyledPreview';

export const PreviewPhone: FC = () => {
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
    <StyledPhone>
      <div className='phone-container'>
        <div className='phone-statusbar'>
          <div className='phone-info'>
            <div className='phone-time'>
              {currentHour}:{currentMinute}
            </div>
            <span className='phone-icon-notifications'></span>
          </div>
          <span className='phone-icon-functions'></span>
        </div>
        <StyledNotification>
          <div className='preview-heading'>
            <div className='preview-user'>
              <div className='preview-icon'>
                <img src={previewData.pushIcon} alt={previewData.pushName} />
              </div>
              <ul className='preview-list'>
                <li>
                  <span className='preview-name'>{previewData.pushName}</span>
                </li>
                <li>
                  <span className='preview-time'>now</span>
                </li>
              </ul>
            </div>
            <div className='preview-button'>
              {getIconComponent(EnumIcons.arrow)}
            </div>
          </div>

          <div className='preview-content'>
            <span className='preview-title'>{previewData.pushTitle}</span>
            <p className='preview-text'>{previewData.pushMessage}</p>

            {previewData.pushImg && (
              <img
                className='preview-img'
                src={previewData.pushImg}
                alt='demo'
              />
            )}
          </div>
        </StyledNotification>
      </div>
      <div className='phone-buttons'>
        <div className='phone-volume'>
          <span className='phone-control'></span>
          <span className='phone-control'></span>
        </div>
        <div className='phone-power'>
          <span className='phone-control'></span>
        </div>
      </div>
    </StyledPhone>
  );
};
