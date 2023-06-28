import { IconButton } from '@mui/material';
import { FC } from 'react';
import { getIconComponent } from '../../helpers/getIconComponent';
import { StyledInputLabel } from '../../theme/styles/StyledField';
import { StyledTooltip } from '../../theme/styles/StyledTooltip';
import { EnumIcons } from '../../types';

export const Label: FC<IPropTypes> = props => {
  const { tooltipText, label, id } = props;

  return (
    <StyledInputLabel shrink htmlFor={id}>
      {label}

      {tooltipText && (
        <StyledTooltip title={tooltipText}>
          <IconButton>{getIconComponent(EnumIcons.info)}</IconButton>
        </StyledTooltip>
      )}
    </StyledInputLabel>
  );
};

interface IPropTypes {
  id?: string;
  tooltipText?: string;
  label?: string;
}
