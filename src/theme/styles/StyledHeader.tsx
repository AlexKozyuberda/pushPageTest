import { FormControl } from '@mui/material';
import styled from 'styled-components';
import { theme } from '../variables';

export const StyledHeader = styled.header`
  .content {
    display: flex;
    flex-basis: auto;
    padding: 20px 32px;
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 0 32px;
    margin-left: auto;
  }
`;

export const StyledFormControlSelect = styled(FormControl)`
  .MuiInputBase-root {
    display: flex;
    flex-direction: row-reverse;
    font-family: 'Manrope', sans-serif;
    border-radius: 0;

    .MuiSelect-select {
      &.MuiInputBase-input {
        position: relative;
        z-index: 1;
        min-height: auto;
        padding: 0 0 0 24px;
        font-size: 20px;
        font-weight: ${theme.fontWeight.semiBold};
        text-transform: uppercase;
        color: ${theme.colors.light};
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 0;
      flex: 0 0 12px;
      margin-top: -4px;
      height: 12px;
    }

    fieldset {
      border: none;
    }
  }
`;
