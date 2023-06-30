import { FormControl, InputLabel } from '@mui/material';
import styled from 'styled-components';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { theme } from '../variables';

interface StyledFieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  textarea?: boolean;
  select?: boolean;
  multiSelect?: boolean;
  color?: string;
}

export const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

export const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px 0;
`;

export const StyledFieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
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
`;

export const StyledInputLabel = styled(InputLabel)`
  .caption {
    color: ${theme.colors.dark};
    font-weight: ${theme.fontWeight.regular};
  }

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

    &.Mui-focused {
      color: ${theme.colors.light};
    }
  }
  .MuiButtonBase-root {
    width: 20px;
    height: 20px;
  }
`;

export const StyledField = styled.div<StyledFieldProps>`
  ${({ textarea }) =>
    textarea &&
    `
      .MuiInputBase-root {
        padding: 0;

        .MuiInputBase-input { 
          height: auto !important;
          min-height: 110px;
          padding: 12px 20px;
        }
      }
    `}

  ${({ select }) =>
    select &&
    `
      .MuiInputBase-root {

        .MuiInputBase-input {
          &.MuiSelect-select  {
            display: flex;
            align-items: center;
            height: 46px;
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
      }
    `}

${({ multiSelect }) =>
    multiSelect &&
    `
      .MuiInputBase-root {
        height: 46px;
        background-color: ${theme.colors.field.baseLight};
        border: 1px solid ${theme.colors.field.strokeBlue};
        border-radius: 4px;
        
        .MuiInputBase-input {
          height: auto;
          
          &.MuiAutocomplete-input {
            padding: 0;
            background: transparent;
            border: none;
          }
        }
      
        &.MuiAutocomplete-inputRoot {
          padding: 0 40px 0 20px;

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
      }
    `}

  .MuiInputBase-root {
    width: 100%;
    padding: 0;
    font-family: 'Manrope', sans-serif;
    font-weight: ${theme.fontWeight.semiBold};
    font-size: 16px;

    .MuiInputAdornment-root {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 20px;
      height: 20px;
      margin: 0;
      transform: translateY(-50%);

      .MuiIconButton-root {
        padding: 0;
        width: 100%;
        height: 100%;

        svg {
          display: block;
          width: 100%;
          height: 100%;
          fill: ${theme.colors.yellow100};
        }
      }
    }

    fieldset {
      top: 0;
      padding: 0;
      border: none;
    }

    &.Mui-error {
      .MuiInputBase-input {
        border-color: ${theme.colors.red100};
      }
    }
  }

  .MuiInputBase-input {
    box-sizing: border-box;
    height: 46px;
    padding: 0 20px;
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: ${theme.colors.light};

    background-color: ${props =>
      props.color === 'dark'
        ? theme.colors.bg.baseDark
        : theme.colors.field.baseLight};
    border: 1px solid ${theme.colors.field.strokeBlue};
    border-radius: 4px;

    &::placeholder {
      color: ${theme.colors.steelGray};
      opacity: 1;
    }
  }

  & ~ .MuiFormHelperText-root {
    margin: -5px 0 0;
    color: ${theme.colors.red100};
  }
`;
