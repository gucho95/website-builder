import {
  Heading,
  Input,
  Paragraph,
  Spacing,
  Textarea,
  Uploader,
  Button,
  BUTTON_TYPES,
  BUTTON_HTML_TYPES,
} from '@atoms';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CollapseButton, Collapse } from './CollapseItems';

const MOCK = {
  title: `See What Front Signs Can Do For You`,
  description: `Enter your details, attach your project files (if you have any) and our agent will get in touch with you as soon as possible to provide a quote for your project. Please note that Front Signs is a full-cycle sign manufacturing company. We handle all your signage needs in-house – starting with fabrication/printing and ending with installation and getting a permit for your sign (when necessary) in compliance with local laws and ordinances.`,
};

const classes = { root: 'flex py-20 px-28 shadow-3 mt-8 rounded-10px', textSection: '', formSection: '' };

const Type1 = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const methods = useForm({ mode: 'onChange' });
  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  const onFormSuccess = (values) => {
    console.log(`values`, values);
  };
  const onFormError = (error) => {
    console.log(`errro`, error);
  };

  return (
    <div className='mx-2.5'>
      <div className={classes.root}>
        <div className='flex-1 text-blue-dark'>
          <Heading level={3} children={MOCK.title} className='uppercase' />
          <Spacing className='pt-7' />
          <Paragraph children={MOCK.description} className='text-p2-32 font-light' />
        </div>
        <Spacing className='pl-36' />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onFormSuccess, onFormError)} className='w-718px'>
            <Spacing className='pt-5' />
            <div className='grid grid-cols-2 gap-x-7'>
              <Input className='rounded-30px' placeholder='Full name' {...register('fullName')} />
              <Input
                className='rounded-30px'
                placeholder='Email*'
                error={errors.email}
                {...register('email', { required: true })}
              />
            </div>
            <Spacing className='pt-5' />
            <div className='grid grid-cols-2 gap-x-7'>
              <Input className='rounded-30px' placeholder='Company' {...register('company')} />
              <Input className='rounded-30px' placeholder='Phone' {...register('phone')} />
            </div>
            <Spacing className='pt-5' />
            <Textarea
              error={errors.description}
              className='rounded-30px'
              placeholder='Tell us about your project*'
              {...register('description', { required: true })}
            />
            <Spacing className='pt-5' />
            <Collapse menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
            {menuVisible ? <CollapseButton visible={false} /> : null}
            <Spacing className='pt-5' />
            <div className='flex items-baseline'>
              <div className='flex-1'>
                <Uploader />
              </div>
              <Spacing className='pl-7' />
              <div className='w-215px'>
                <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} className='w-full'>
                  Send
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Type1;
