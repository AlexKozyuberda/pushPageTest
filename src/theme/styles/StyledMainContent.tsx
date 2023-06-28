import { Divider } from '@mui/material';
import styled from 'styled-components';
import { theme } from '../variables';

export const StyledMainContent = styled.main`
  padding: 32px 32px 32px 29px;
  background-color: ${theme.colors.bg.baseDark};
  border-radius: 4px;
`;

export const StyledMainHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  .title {
    margin: 0;
    font-size: 32px;
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.dark};

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .subtitle {
    display: flex;
    align-items: center;
    gap: 0 18px;
    margin: 0;
    font-size: 32px;
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.light};
  }
`;

export const StyledMainDivider = styled(Divider)`
  &.MuiDivider-root {
    margin: 32px 0;
    border: 1px solid ${theme.colors.field.strokeBlue};
  }
`;
