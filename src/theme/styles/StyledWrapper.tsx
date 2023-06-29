import { Dialog } from '@mui/material';
import styled from 'styled-components';
import { theme } from '../variables';

export const StyledWrapper = styled.div`
  padding: 0 32px 0 345px;
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
