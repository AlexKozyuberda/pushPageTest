import { Divider } from '@mui/material';
import styled from 'styled-components';
import { EnumBreakpoints } from '../../../types';
import { theme } from '../../variables';

export const StyledMainContent = styled.main`
  padding: 32px 32px 32px 29px;
  background-color: ${theme.colors.bg.baseDark};
  border-radius: 4px;

  @media (max-width: ${EnumBreakpoints.tabletPortrait}) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const StyledMainHeading = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  .title {
    margin: 0;
    font-size: 32px;
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.dark};

    @media (max-width: ${EnumBreakpoints.desktopSmall}) {
      font-size: 26px;
    }

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

    @media (max-width: ${EnumBreakpoints.desktopSmall}) {
      font-size: 26px;
    }
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
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledAddButton = styled.span`
  display: flex;
  align-items: center;
  gap: 0 12px;
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 16px;
  color: ${theme.colors.yellow100};
  transition: opacity 0.3s;
  cursor: pointer;

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    fill: ${theme.colors.yellow100};
  }

  &:hover {
    opacity: 0.8;
  }
`;
