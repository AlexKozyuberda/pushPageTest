import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledWrapper } from '../../theme/styles';
import { StyledMainContent } from '../../theme/styles/StyledMainContent';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

export const Layout: FC = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navigation />
      <StyledMainContent>
        <Outlet />
      </StyledMainContent>
    </StyledWrapper>
  );
};
