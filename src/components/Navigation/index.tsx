import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { navigation } from '../../configs/navigation';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledNav, StyledNavLink } from '../../theme/styles';

export const Navigation: FC = () => {
  return (
    <StyledNav>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='Wild Wild Leads' />
        </Link>
      </div>

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
