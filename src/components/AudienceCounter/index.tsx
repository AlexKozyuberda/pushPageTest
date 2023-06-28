import { StyledAudienceCounter } from '../../theme/styles/StyledAudienceCounter';

import { useState } from 'react';
import userThree from '../../assets/UsersThree.svg';

export const AudienceCounter = () => {
  const [count, setCount] = useState(10);
  return (
    <StyledAudienceCounter>
      <div className='icon'>
        <img src={userThree} alt='Audience Counter' />
      </div>
      <div className='content'>
        <span className='caption'>Счетчик аудитории</span>
        <span className='count'>{count}</span>
      </div>
    </StyledAudienceCounter>
  );
};
