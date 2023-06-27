import { Tooltip } from '@mui/material';
import styled from 'styled-components';
import { theme } from '../variables';

export const StyledTooltip = styled(Tooltip)`
  &.MuiIconButton-root {
    width: 32px;
    height: 32px;
    padding: 0;

    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: ${theme.colors.yellow100};
    }
  }
`;
