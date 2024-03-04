import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Button, BUTTON_TYPES, Spacing, BUTTON_HTML_TYPES } from '@atoms';
import WIDGET_TYPES, { WIDGET_FORM_COMPONENTS } from '@constants/widgets';
import { useRouter } from '@hooks';
import columnWidgets from '@actions/columnWidgets';
import { PATHS } from '@constants/paths';
import { selectColumnWidget } from '@selectors/columnsWidgets';
import { v4 as uuidv4 } from 'uuid';

const classes = {
  divider: 'w-full h-1px bg-grey-light',
  widgetFormWrapper: 'max-w-3xl',
  buttonWrapper: 'flex justify-end',
};

const OPTIONS = Object.values(WIDGET_TYPES).map((opt) => ({ value: opt, label: opt }));

const Body = () => {
  const dispatch = useDispatch();
  const { params, history } = useRouter();
  const { widgetId, page, column } = params;
  const widget = useSelector((state) => selectColumnWidget(state, column));
  const isUpdateMode = !!widget?.widgetData;
  const widgetData = widget?.widgetData;
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldUnregister: true,
    defaultValues: isUpdateMode ? widgetData : { type: WIDGET_TYPES.TEXT },
  });
  const { register, watch, handleSubmit } = methods;
  const activeType = watch('type');
  const addWidget = (data) => dispatch(columnWidgets.add(data));
  const updateWidget = (data) => dispatch(columnWidgets.update(data));

  const onFormSuccess = (widget) => {
    const data = {
      id: isUpdateMode ? widgetId : uuidv4(),
      parentId: column,
      widgetData: { ...widget },
    };
    isUpdateMode ? updateWidget(data) : addWidget(data);
    history.push(`${PATHS.DASHBOARD}/pages/${page}`);
  };

  const onFormError = (errors) => {
    console.log('errors', errors);
  };

  const WidgetForm = useMemo(() => (activeType ? WIDGET_FORM_COMPONENTS[activeType] : null), [activeType]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)}>
        <Select options={OPTIONS} placeholder='Select a widget' className='w-6/12' {...register('type')} />
        <Spacing className='pt-4' />
        <div className={classes.divider} />
        <Spacing className='pt-4' />
        <div className={classes.widgetFormWrapper}>
          {activeType ? <WidgetForm isUpdateMode={isUpdateMode} /> : null}
          <Spacing className='pt-4' />

          {activeType ? (
            <div className={classes.buttonWrapper}>
              <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} children='Submit' />
            </div>
          ) : (
            <div>No widget selected</div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default Body;
