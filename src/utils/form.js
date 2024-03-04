export const checkFieldType = (field) => {
  switch (true) {
    case Array.isArray(field):
      return 'array';
    default:
      return 'single';
  }
};

export const generateArrayField = ({ register, errors, item: items, control }) => {
  return items.map((item, index) => {
    const { component: Component, name, rules, ...rest } = item;
    const fieldProps = name ? register(`${name}.${index}`, rules) : rules;
    const error = errors?.[name]?.[index];
    return <Component key={name} error={error} control={control} {...fieldProps} {...rest} />;
  });
};

export const generateSingleField = ({ register, errors, item, control }) => {
  const { component: Component, name, rules, ...rest } = item;
  const fieldProps = name ? register(name, rules) : rules;
  const error = errors?.[name];
  return <Component key={name} error={error} control={control} {...fieldProps} {...rest} />;
};

export const generateForm = ({ fields, register, errors, control }) => {
  return fields.map((item) => {
    const fieldType = checkFieldType(item);
    let Field = null;
    switch (fieldType) {
      case 'array':
        Field = generateArrayField({ item, register, errors, control });
        break;
      case 'single':
        Field = generateSingleField({ item, register, errors, control });
        break;
      default:
        Field = generateSingleField({ item, register, errors, control });
    }
    return Field;
  });
};
