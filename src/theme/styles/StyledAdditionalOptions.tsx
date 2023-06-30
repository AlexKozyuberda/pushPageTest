import styled from 'styled-components';
import { theme } from '../variables';

export const StyledAdditionalOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  width: 100%;

  .content {
    padding: 20px 17px 21px 12px;
    background-color: ${theme.colors.field.baseLight};
    border-radius: 4px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
      padding-top: 24px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const StyledAdditionalOption = styled.div`
  display: flex;

  &:not(.date) {
    &:not(:last-child) {
      padding-bottom: 24px;
      border-bottom: 1px solid ${theme.colors.field.strokeBlue};
    }

    &:not(:first-child) {
      padding-top: 24px;
    }
  }

  &.date {
    .container {
      flex: none;
    }

    .options {
      .MuiFormControl-root {
        max-width: 210px;
      }
    }
  }

  .container {
    display: inline-flex;
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

  .delete {
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
  }
`;
