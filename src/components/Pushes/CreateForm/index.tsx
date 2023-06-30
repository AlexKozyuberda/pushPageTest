import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getIconComponent } from '../../../helpers/getIconComponent';
import { pushAction } from '../../../lib/redux/actions';
import { getPushSegmentOptions } from '../../../lib/redux/selectors';
import { data } from '../../../mock-data/data';
import {
  StyledFieldContainer,
  StyledFieldGroup,
} from '../../../theme/styles/StyledField';
import {
  StyledCreatePushes,
  StyledPushesForm,
  StyledPushesFormButtons,
} from '../../../theme/styles/StyledPushes';
import { StyledMainRows } from '../../../theme/styles/layout/StyledLayout';
import {
  StyledAddButton,
  StyledMainDivider,
} from '../../../theme/styles/layout/StyledMainContent';
import { EnumBreakpoints, EnumIcons } from '../../../types';
import { Input } from '../../FormElements/Input';
import { MultiSelect } from '../../FormElements/MultiSelect';
import { SelectField } from '../../FormElements/Select';
import { Textarea } from '../../FormElements/Textarea';
import { PreviewPushes } from '../Preview';
import { FieldDialog } from './Dialog';
import { MailingType } from './MailingType';
import { Segmentation } from './Segmentation';
import { pushSchema } from './config';

export const CreatePushes = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const pushSegmentOptions = useSelector(getPushSegmentOptions);

  const isDesktopScreen = useMediaQuery(
    `(max-width: ${EnumBreakpoints.desktopSmall})`
  );

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(pushSchema),
  });

  const {
    errors: { pushMessage, pushTitle },
  } = methods.formState;

  const onSubmit = (data: any) => {
    dispatch(pushAction.setPreviewData(data));
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

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
            <StyledMainRows half>
              <Box>
                <StyledFieldContainer>
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
                  <SelectField
                    control={methods.control}
                    name='pushLanguage'
                    placeholder='Выберите пункт'
                    tooltipText='Lorem ipsum'
                    label='Исходный язык'
                    options={data}
                  />
                  <StyledFieldGroup>
                    <Input
                      label='Иконка'
                      id='push-icon'
                      caption='(опцильнально)'
                      placeholder='Введите ссылку на иконку'
                      register={methods.register('pushIcon')}
                    />
                    <Input
                      label='Изображение'
                      id='push-img'
                      caption='(опцильнально)'
                      placeholder='Введите ссылку на изображение'
                      register={methods.register('pushImg')}
                    />
                  </StyledFieldGroup>
                  <MultiSelect
                    control={methods.control}
                    options={data}
                    name='pushAudience'
                    label='Аудитория'
                    tooltipText='Lorem ipsum'
                    placeholder='Выберите пункт'
                  />
                  {pushSegmentOptions.length === 0 && (
                    <StyledAddButton onClick={handleDialogOpen}>
                      {getIconComponent(EnumIcons.plus)}
                      Добавить сегментацию
                    </StyledAddButton>
                  )}

                  {pushSegmentOptions.length > 0 && (
                    <Segmentation dialogOpen={handleDialogOpen} />
                  )}

                  {isDesktopScreen && <MailingType />}
                </StyledFieldContainer>
              </Box>
              <Box>
                <PreviewPushes />
              </Box>
            </StyledMainRows>
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
      <FieldDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </StyledCreatePushes>
  );
};
