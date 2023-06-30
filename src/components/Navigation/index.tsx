import { useMediaQuery } from '@mui/material';
import cx from 'classnames';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { navigation } from '../../configs/navigation';
import { getIconComponent } from '../../helpers/getIconComponent';
import { getNavigationOpen } from '../../lib/redux/selectors';
import { StyledNav, StyledNavLink } from '../../theme/styles';
import { EnumBreakpoints } from '../../types';
import { Logo } from '../Logo';

export const Navigation: FC = () => {
  const isNavigationOpen = useSelector(getNavigationOpen);

  const settingClasses = cx({
    open: isNavigationOpen,
  });

  const isDesktopScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.desktopSmall})`
  );

  return (
    <StyledNav className={settingClasses}>
      {isDesktopScreen && <Logo />}
      <div className='content'>
        <ul className='list'>
          {navigation.map((item, index) => {
            return (
              <li key={index}>
                <StyledNavLink to={item.path}>
                  {getIconComponent(item.icon)}
                  {item.name}
                </StyledNavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledNav>
  );
};
