import {
  FormControl,
  InputBase,
  InputLabel,
  Select,
  TextField,
} from '@mui/material';
import styled from 'styled-components';
import { theme } from '../variables';

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export const StyledClearButton = styled.span`
  display: block;
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 14px;
  color: ${theme.colors.red100};
  cursor: pointer;
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label.MuiFormLabel-root {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledMultiSelect = styled(TextField)`
  &.MuiTextField-root {
    .MuiInputBase-root {
      &.MuiOutlinedInput-root {
        height: 46px;
        padding: 0 20px;
        font-family: 'Manrope', sans-serif;
        font-size: 16px;
        color: ${theme.colors.light};
        background-color: ${theme.colors.field.baseLight};
        border: 1px solid ${theme.colors.field.strokeBlue};
        border-radius: 4px;

        &.MuiOutlinedInput-root {
          padding-right: 40px;
        }

        .MuiChip-root {
          background-color: ${theme.colors.blue100};
          height: 27px;
          margin-right: 10px;
          border-radius: 8px;

          .MuiChip-label {
            display: block;
            padding: 0 10px 0 8px;
            font-family: 'Manrope', sans-serif;
            font-weight: ${theme.fontWeight.semiBold};
            font-size: 14px;
            color: ${theme.colors.light};
          }

          .MuiIconButton-root {
            width: 18px;
            height: 18px;
            margin: 0 3px 0 0;
            padding: 0;
            border-left: 1px solid ${theme.colors.light};
            border-radius: 0;

            svg {
              width: 8px;
              height: 8px;
              fill: ${theme.colors.light};
            }
          }
        }

        .MuiAutocomplete-endAdornment {
          position: absolute;
          top: 50%;
          right: 20px;
          display: flex;
          width: 12px;
          height: 12px;
          margin-top: -4px;
          padding: 0;

          .MuiAutocomplete-popupIndicator {
            margin: 0;
            padding: 0;
            transform: rotate(0);

            svg {
              width: 12px;
              height: 12px;
              fill: ${theme.colors.blue100};
            }
          }

          .MuiAutocomplete-clearIndicator {
            display: none;
          }
        }

        &:hover {
          fieldset {
            border: none;
          }
        }
      }

      .MuiInputBase-input {
        padding: 0;

        &::placeholder {
          color: ${theme.colors.steelGray};
          opacity: 1;
        }
      }
    }
  }
`;

export const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    height: 46px;
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: ${theme.colors.light};
    background-color: ${theme.colors.field.baseLight};
    border: 1px solid ${theme.colors.field.strokeBlue};
    border-radius: 4px;

    .MuiSelect-select {
      &.MuiInputBase-input {
        position: relative;
        z-index: 1;
        padding: 0 40px 0 20px;
      }
    }

    .placeholder {
      color: ${theme.colors.steelGray};
    }

    svg {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 12px;
      height: 12px;
      margin-top: -4px;
      fill: ${theme.colors.blue100};
    }

    fieldset {
      border: none;
    }

    &::after,
    &::before {
      content: none;
    }
  }
`;

export const StyledInput = styled(InputBase)`
  .MuiInputBase-input {
    height: 46px;
    padding: 0 20px;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: ${theme.colors.light};
    background-color: ${theme.colors.field.baseLight};
    border: 1px solid ${theme.colors.field.strokeBlue};
    border-radius: 4px;

    &::placeholder {
      color: ${theme.colors.steelGray};
      opacity: 1;
    }
  }
`;

export const StyledTextarea = styled(InputBase)`
  &.MuiInputBase-root {
    padding: 0;
  }
  .MuiInputBase-input {
    box-sizing: border-box;
    height: auto !important;
    min-height: 110px;
    padding: 12px 20px;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: ${theme.colors.light};
    background-color: ${theme.colors.field.baseLight};
    border: 1px solid ${theme.colors.field.strokeBlue};
    border-radius: 4px;

    &::placeholder {
      color: ${theme.colors.steelGray};
      opacity: 1;
    }
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  &.MuiFormLabel-root {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Manrope', sans-serif;
    font-weight: ${theme.fontWeight.semiBold};
    font-size: 16px;
    color: ${theme.colors.light};
    transform: translate(0, 0) scale(1);

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    &.Mui-focused {
      color: ${theme.colors.light};
    }
  }
  .MuiButtonBase-root {
    width: 20px;
    height: 20px;
  }
`;
