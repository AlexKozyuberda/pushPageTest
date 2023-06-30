import { Dialog } from '@mui/material';
import styled from 'styled-components';
import { EnumBreakpoints } from '../../../types';
import { theme } from '../../variables';

export const StyledWrapper = styled.div`
  @media (max-width: ${EnumBreakpoints.desktopMedium}) {
    padding: 0 32px;
  }

  @media (max-width: ${EnumBreakpoints.tablet}) {
    padding: 0 20px;
  }

  padding-left: 345px;
`;

export const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: transparent;
  }

  .MuiFormControl-root {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .MuiPaper-root {
    background-color: transparent;
    border-radius: 16px;
  }

  .MuiDialogContent-root {
    background-color: ${theme.colors.bg.blueGray};
    border: 1px solid ${theme.colors.bg.darkBlue};
    border-radius: 16px;
  }

  .MuiDialogContent-root {
    padding: 20px;
  }
`;
