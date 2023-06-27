import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.svg';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledFormControlSelect, StyledHeader } from '../../theme/styles';
import { StyledSwitch } from '../../theme/styles/StyledSwitch';
import { EnumIcons } from '../../types';

export const Header: FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('en');

  const handleClick = (): void => {
    console.log('Повинна бути авторізація');
  };

  const handleChange = (event: SelectChangeEvent<string>): void => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledHeader>
      <div className='content'>
        <ul className='menu'>
          <li className='menu-item'>
            <StyledFormControlSelect>
              <Select
                value={selectedValue}
                onChange={handleChange}
                IconComponent={() => getIconComponent(EnumIcons.choiceArrow)}
              >
                <MenuItem value='en'>En</MenuItem>
                <MenuItem value='ua'>Ua</MenuItem>
              </Select>
            </StyledFormControlSelect>
          </li>
          <li className='menu-item'>
            <StyledSwitch />
          </li>
          <li className='menu-item'>
            <Link to='#' onClick={handleClick}>
              <img src={user} alt='' />
            </Link>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};
