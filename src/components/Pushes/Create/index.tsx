import { yupResolver } from '@hookform/resolvers/yup';
import { Button, DialogContent, FormControl, MenuItem } from '@mui/material';
import SelectCustom from '@mui/material/Select';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { generateID } from '../../../helpers/getGenerateId';
import { getIconComponent } from '../../../helpers/getIconComponent';
import { pushAction } from '../../../lib/redux/actions';
import { getPushSegmentOptions } from '../../../lib/redux/selectors';
import { StyledDialog } from '../../../theme/styles';
import {
  StyledAddButton,
  StyledMainDivider,
} from '../../../theme/styles/StyledMainContent';
import {
  StyledCreatePushes,
  StyledPushContainer,
  StyledPushesForm,
  StyledPushesFormButtons,
} from '../../../theme/styles/StyledPushes';
import { EnumIcons } from '../../../types';
import { Input } from '../../FormElements/Input';
import { Label } from '../../FormElements/Label';
import { MultiSelect } from '../../FormElements/MultiSelect';
import { Select } from '../../FormElements/Select';
import { Textarea } from '../../FormElements/Textarea';
import { PreviewPushes } from '../Preview';
import { Segmentation } from './Segmentation';
import { pushSchema } from './config';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
export const CreatePushes = () => {
  const [open, setOpen] = useState(false);
  const [segment, setSegment] = useState('');
  const dispatch = useDispatch();
  const pushSegmentOptions = useSelector(getPushSegmentOptions);

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(pushSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(pushAction.setPreviewData(data));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSegment('');
  };

  const handleSegmentChange = event => {
    setSegment(event.target.value);
    dispatch(
      pushAction.setSegmentOptions({
        id: generateID(),
        index: pushSegmentOptions.length,
        segment: event.target.value,
      })
    );
  };

  const {
    errors: { pushMessage, pushTitle },
  } = methods.formState;

  return (
    <StyledCreatePushes>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <StyledPushesForm>
            <Input
              label='Название пуша'
              id='push-name'
              placeholder='Введите название нового пуша'
              register={methods.register('pushName')}
            />
            <StyledMainDivider />
            <StyledPushContainer>
              <div className='item'>
                <div className='fields'>
                  <Input
                    label='Заголовок сообщения'
                    id='push-title'
                    placeholder='Введите заголовок максимально 50 символов'
                    register={methods.register('pushTitle')}
                    error={pushTitle}
                  />
                  <Textarea
                    label='Текст сообщения'
                    id='push-message'
                    placeholder='Введите заголовок максимально 50 символов'
                    register={methods.register('pushMessage')}
                    error={pushMessage}
                  />

                  <Select
                    control={methods.control}
                    name='pushLanguage'
                    placeholder='Выберите пункт'
                    tooltipText='Lorem ipsum'
                    label='Исходный язык'
                    options={[{ name: 'Английский' }, { name: 'Украинский' }]}
                  />

                  <div className='fields-group'>
                    <Input
                      label='Иконка (опцильнально)'
                      id='push-icon'
                      placeholder='Введите ссылку на иконку'
                      register={methods.register('pushIcon')}
                    />
                    <Input
                      label='Изображение (опцильнально)'
                      id='push-img'
                      placeholder='Введите ссылку на изображение'
                      register={methods.register('pushImg')}
                    />
                  </div>
                  <MultiSelect
                    control={methods.control}
                    options={options}
                    name='pushAudience'
                    label='Аудитория'
                    tooltipText='Lorem ipsum'
                    placeholder='Выберите пункт'
                  />
                  {pushSegmentOptions.length === 0 && (
                    <StyledAddButton onClick={handleClickOpen}>
                      {getIconComponent(EnumIcons.plus)}
                      Добавить сегментацию
                    </StyledAddButton>
                  )}

                  {pushSegmentOptions.length > 0 && (
                    <Segmentation dialogOpen={handleClickOpen} />
                  )}
                </div>
              </div>
              <div className='item'>
                <PreviewPushes />
              </div>
            </StyledPushContainer>
          </StyledPushesForm>
          <StyledPushesFormButtons>
            <Button type='button' variant='outlined'>
              Отмена
            </Button>
            <Button type='submit' variant='contained'>
              Создать Пуш
            </Button>
          </StyledPushesFormButtons>
        </form>
      </FormProvider>
      <StyledDialog open={open} onClose={handleClose}>
        <DialogContent>
          <FormControl>
            <Label label='Выберите дополнительные параметры' />
            <SelectCustom
              value={segment}
              onChange={handleSegmentChange}
              displayEmpty
            >
              <MenuItem value='' disabled>
                Выберите пункт
              </MenuItem>
              <MenuItem value='deposit'>Депозит</MenuItem>
              <MenuItem value='days'>Действие</MenuItem>
              <MenuItem value='activity'>Активность</MenuItem>
            </SelectCustom>
          </FormControl>
        </DialogContent>
      </StyledDialog>
    </StyledCreatePushes>
  );
};
