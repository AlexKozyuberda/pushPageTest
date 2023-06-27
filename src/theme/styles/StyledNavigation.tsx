import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../variables';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 32px;
  bottom: 0;
  width: 293px;
  padding: 0 24px;
  background-color: ${theme.colors.bg.baseDark};

  .logo {
    padding: 20px 0;

    img {
      width: 68px;
      height: auto;
    }
  }

  .list {
    li {
      &:not(:last-child) {
        margin-bottom: 28px;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0 20px;
  padding: 12px;
  color: ${theme.colors.light};
  border-radius: 8px;
  transition: color 0.3s, background-color 0.2s;

  &:hover,
  &:active {
    &:not(.active) {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  svg {
    fill: ${theme.colors.red100};
    transition: fill 0.3s;
  }

  &.active {
    font-weight: ${theme.fontWeight.extraBold};
    color: ${theme.colors.light};
    background-color: ${theme.colors.red100};

    svg {
      fill: ${theme.colors.light};
    }
  }
`;
