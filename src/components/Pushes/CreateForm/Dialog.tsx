import { DialogContent, FormControl, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';

import { StyledDialog } from '../../../theme/styles';

import { useDispatch, useSelector } from 'react-redux';

import { generateID } from '../../../helpers/getGenerateId';

import { pushAction } from '../../../lib/redux/actions';
import { getPushSegmentOptions } from '../../../lib/redux/selectors';

import { getIconComponent } from '../../../helpers/getIconComponent';
import { StyledField } from '../../../theme/styles/StyledField';
import { EnumIcons } from '../../../types';
import { Label } from '../../FormElements/Label';

export const FieldDialog: FC<{
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
}> = ({ dialogOpen, setDialogOpen }) => {
  const dispatch = useDispatch();
  const pushSegmentOptions = useSelector(getPushSegmentOptions);
  const [segment, setSegment] = useState('');

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSegmentChange = (event: SelectChangeEvent<string>) => {
    setSegment(event.target.value);

    dispatch(
      pushAction.setSegmentOptions({
        id: generateID(),
        index: pushSegmentOptions.length,
        segment: event.target.value,
      })
    );
  };

  return (
    <StyledDialog open={dialogOpen} onClose={handleDialogClose}>
      <DialogContent>
        <FormControl>
          <Label label='Выберите дополнительные параметры' />
          <StyledField select color='dark'>
            <Select
              value={segment}
              onChange={handleSegmentChange}
              displayEmpty
              IconComponent={() => getIconComponent(EnumIcons.choiceArrow)}
            >
              <MenuItem value='' disabled>
                <span className='placeholder'>Выберите пункт</span>
              </MenuItem>
              <MenuItem value='deposit'>Депозит</MenuItem>
              <MenuItem value='days'>Действие</MenuItem>
              <MenuItem value='activity'>Активность</MenuItem>
            </Select>
          </StyledField>
        </FormControl>
      </DialogContent>
    </StyledDialog>
  );
};
