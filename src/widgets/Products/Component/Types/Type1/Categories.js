import { Button, BUTTON_SIZES, BUTTON_TYPES } from '@atoms';
import classNames from 'classnames';

const wrapperClasses = { root: 'flex items-center justify-center space-x-5 h-12' };

const itemClasses = {
  item: 'py-2 px-7 rounded-20px text-p3-25 text-blue-dark',
  notSelected: 'border-1px border-grey-light',
  selected: 'border-2px border-blue-light',
};

const SingleCategoryItem = ({ name = 'Category 1', selected, toggle }) => (
  <Button
    children={name}
    onClick={toggle}
    type={BUTTON_TYPES.CUSTOM}
    size={BUTTON_SIZES.CUSTOM}
    className={classNames(itemClasses.item, selected ? itemClasses.selected : itemClasses.notSelected)}
  />
);

const Categories = ({ categories, toggleCategorySelectedState, checkSelected }) => {
  return (
    <div className={wrapperClasses.root}>
      {categories.map((category) => {
        const props = {
          ...category,
          selected: checkSelected(category),
          toggle: () => toggleCategorySelectedState(category),
        };
        return <SingleCategoryItem key={category.id} {...props} />;
      })}
    </div>
  );
};

export default Categories;
