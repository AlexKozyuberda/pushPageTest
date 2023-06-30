import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import {
  MenuItem,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from '@mui/material';

import { getIconComponent } from '../../helpers/getIconComponent';
import { EnumBreakpoints, EnumIcons } from '../../types';

import { StyledFormControlDropDown, StyledHeader } from '../../theme/styles';
import { StyledSwitch } from '../../theme/styles/StyledSwitch';
import { StyledMenuButton } from '../../theme/styles/layout/StyledLayout';

import { useDispatch, useSelector } from 'react-redux';
import user from '../../assets/user.svg';
import { uiActions } from '../../lib/redux/actions';
import { getNavigationOpen } from '../../lib/redux/selectors';
import { Logo } from '../Logo';

export const Header: FC = () => {
  const isDesktopScreen = useMediaQuery(
    `(max-width: ${EnumBreakpoints.desktopMedium})`
  );

  const isNavigationOpen = useSelector(getNavigationOpen);

  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState<string>('en');

  const handleClick = (): void => {
    console.log('Повинна бути авторізація');
  };

  const handleChange = (event: SelectChangeEvent<string>): void => {
    setSelectedValue(event.target.value);
  };

  const handleNavigationClick = () => {
    dispatch(uiActions.setSettingsOpen(!isNavigationOpen));
  };
  return (
    <StyledHeader>
      <div className='content'>
        {isDesktopScreen && <Logo />}

        <ul className='menu'>
          <li className='menu-item'>
            <StyledFormControlDropDown>
              <Select
                value={selectedValue}
                onChange={handleChange}
                IconComponent={() => getIconComponent(EnumIcons.choiceArrow)}
              >
                <MenuItem value='en'>En</MenuItem>
                <MenuItem value='ua'>Ua</MenuItem>
              </Select>
            </StyledFormControlDropDown>
          </li>
          <li className='menu-item'>
            <StyledSwitch />
          </li>
          <li className='menu-item'>
            <Link to='#' onClick={handleClick}>
              <img src={user} alt='User' />
            </Link>
          </li>
        </ul>
        {isDesktopScreen && (
          <StyledMenuButton onClick={handleNavigationClick}>
            <MenuIcon />
          </StyledMenuButton>
        )}
      </div>
    </StyledHeader>
  );
};
