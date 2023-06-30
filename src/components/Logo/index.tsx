import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo } from '../../theme/styles/layout/StyledLayout';

import logo from '../../assets/logo.svg';

export const Logo: FC = () => {
  return (
    <StyledLogo className='logo'>
      <Link to='/'>
        <img src={logo} alt='Wild Wild Leads' />
      </Link>
    </StyledLogo>
  );
};
