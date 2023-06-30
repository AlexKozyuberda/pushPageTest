import { IconButton } from '@mui/material';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styled from 'styled-components';

import { EnumBreakpoints } from '../../../types';
import { theme } from '../../variables';

interface StyledMainRowsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  half?: boolean;
}

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: block;
  }
`;

export const StyledMenuButton = styled(IconButton)`
  &.MuiButtonBase-root {
    margin-left: 32px;
    padding: 0;
    color: ${theme.colors.light};

    @media (max-width: ${EnumBreakpoints.tablet}) {
      margin-left: 15px;
    }
  }
`;

export const StyledMainRows = styled.div<StyledMainRowsProps>`
  display: grid;

  ${({ half }) =>
    half &&
    `
      @media (max-width: ${EnumBreakpoints.tablet}) {
        grid-template-columns: repeat(1, 1fr);
      }

      grid-template-columns: repeat(2, 1fr);
      gap: 45px;
    `}
`;
