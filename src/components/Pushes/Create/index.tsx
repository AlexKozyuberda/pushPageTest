import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { StyledMainDivider } from '../../../theme/styles/StyledMainContent';
import {
  StyledCreatePushes,
  StyledPushContainer,
  StyledPushesContentForm,
} from '../../../theme/styles/StyledPushes';
import { Input } from '../../FormElements/Input';
import { MultiSelect } from '../../FormElements/MultiSelect';
import { Select } from '../../FormElements/Select';
import { Textarea } from '../../FormElements/Textarea';
import { PreviewPushes } from '../Preview';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
export const CreatePushes = () => {
  const { register, control, handleSubmit, watch } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <StyledCreatePushes>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledPushesContentForm>
          <Input
            label='Название пуша'
            id='push-name'
            placeholder='Введите название нового пуша'
            register={register('pushName')}
          />
          <StyledMainDivider />
          <StyledPushContainer>
            <div className='item'>
              <div className='fields'>
                <Input
                  label='Заголовок сообщения'
                  id='push-title'
                  placeholder='Введите заголовок максимально 50 символов'
                  register={register('pushTitle')}
                />
                <Textarea
                  label='Текст сообщения'
                  id='push-message'
                  placeholder='Введите заголовок максимально 50 символов'
                  register={register('pushMessage')}
                />

                <Select
                  control={control}
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
                    register={register('pushIcon')}
                  />
                  <Input
                    label='Изображение (опцильнально)'
                    id='push-img'
                    placeholder='Введите ссылку на изображение'
                    register={register('pushImg')}
                  />
                </div>
                <MultiSelect
                  control={control}
                  options={options}
                  name='pushAudience'
                  label='Аудитория'
                  tooltipText='Lorem ipsum'
                  placeholder='Выберите пункт'
                />
              </div>
            </div>
            <div className='item'>
              <PreviewPushes watch={watch} />
            </div>
          </StyledPushContainer>
        </StyledPushesContentForm>
        <Button type='submit'>Создать Пуш</Button>
      </form>
    </StyledCreatePushes>
  );
};
