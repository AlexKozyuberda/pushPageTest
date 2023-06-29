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
    border-color: ${theme.colors.field.strokeBlue};
  }
`;

export const StyledClearButton = styled.span`
  display: block;
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 14px;
  color: ${theme.colors.red100};
  cursor: pointer;
`;

export const StyledAddButton = styled.span`
  display: flex;
  align-items: center;
  gap: 0 12px;
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 16px;
  color: ${theme.colors.yellow100};
  cursor: pointer;

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    fill: ${theme.colors.yellow100};
  }
`;
