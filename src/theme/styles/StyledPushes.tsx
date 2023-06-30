import styled from 'styled-components';
import { EnumBreakpoints } from '../../types';
import { theme } from '../variables';

export const StyledPushContainer = styled.div`
  display: flex;
  gap: 42px;
`;

export const StyledPushItem = styled.div`
  flex: 1;
`;

export const StyledCreatePushes = styled.div`
  /* flex: 1; */
`;

export const StyledPushesForm = styled.div``;
export const StyledPushesFormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  gap: 28px;
  padding-top: 32px;

  @media (max-width: ${EnumBreakpoints.desktopSmall}) {
    gap: 25px;
  }

  .MuiButton-root {
    min-width: auto;
    height: 46px;
    padding: 12px 24px;
    font-family: 'Manrope', sans-serif;
    font-weight: ${theme.fontWeight.semiBold};
    font-size: 16px;
    text-transform: none;
    border-radius: 8px;
  }

  .MuiButton-outlined {
    color: ${theme.colors.red100};
    border-color: ${theme.colors.red100};

    &:hover {
      color: ${theme.colors.bg.darkRed};
      border-color: ${theme.colors.bg.darkRed};
    }
  }

  .MuiButton-contained {
    background-color: ${theme.colors.red100};

    &:hover {
      background-color: ${theme.colors.bg.darkRed};
    }
  }
`;

export const StyledSegmentation = styled.div`
  .content {
    padding: 20px 17px 21px 12px;
    background-color: ${theme.colors.field.baseLight};
    border-radius: 4px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 16px;
    }
  }
`;

export const StyledSegmentationRow = styled.div`
  display: flex;

  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
  }

  .options {
    display: flex;
    gap: 8px;

    .MuiFormControl-root {
      flex-basis: 210px;
    }
  }

  .MuiIconButton-root {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-top: 7px;
    margin-left: 12px;
    padding: 0;

    svg {
      width: 100%;
      height: 100%;
      fill: ${theme.colors.red100};
    }
  }
`;
