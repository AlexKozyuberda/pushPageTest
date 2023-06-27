import { Switch } from '@mui/material';
import styled from 'styled-components';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import { theme } from '../variables';

export const StyledSwitch = styled(Switch)`
  &.MuiSwitch-root {
    width: 59px;
    height: 28px;
    padding: 0;
  }

  .MuiButtonBase-root {
    top: 50%;
    margin-top: -11px;
    padding: 0;
    transform: translateX(4px);

    .MuiSwitch-input {
      width: 90px;
    }

    &.Mui-checked {
      transform: translateX(33px);

      .MuiSwitch-thumb {
        &::before {
          background-image: url(${moon});
        }
      }
    }
  }

  .MuiSwitch-thumb {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    background-color: ${theme.colors.light};

    &::before {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      background-image: url(${sun});
      background-repeat: no-repeat;
    }
  }

  .MuiSwitch-track {
    position: relative;
    background: linear-gradient(
      90deg,
      ${theme.colors.bg.darkRed} 0,
      ${theme.colors.bg.darkBlue} 100%
    );
    border-radius: 44px;

    &::after {
      content: '';
      position: absolute;
      top: 0.03125em;
      right: 0.03125em;
      bottom: 0.03125em;
      left: 0.03125em;
      border: 0.03125em solid rgba(0, 0, 0, 0.17);
      border-radius: 44px;
    }
  }
`;
