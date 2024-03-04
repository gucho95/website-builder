import { Heading, Spacing } from '@atoms';
import { useState, useMemo, useEffect } from 'react';
import Categories from './Categories';
import Products from './Products';
import { randomIntFromInterval } from '@utils';

const makeProduct = (id) => ({ ...PRODUCT, id, categoryId: randomIntFromInterval(1, 5) });
const makeProducts = () => {
  let products = [];
  for (let i = 0; i <= 30; i++) {
    products.push(makeProduct(i + 1));
  }
  return products;
};

const PRODUCT = {
  title: 'My product card',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: 'https://media.istockphoto.com/photos/green-canopy-in-the-forest-with-sun-rays-picture-id1221156867',
};

const CATEGORIES = [
  { name: 'All', id: 1 },
  { name: 'Category 1', id: 2 },
  { name: 'Category 2', id: 3 },
  { name: 'Category 3', id: 4 },
  { name: 'Category 4', id: 5 },
];

const PRODUCTS = makeProducts();

const Placeholder = () => <Heading level={5} children='No categories selected' className='text-center' />;

const classes = {
  heading: 'text-center text-blue-dark uppercase',
};

const Type1 = ({ categories = CATEGORIES, products = PRODUCTS }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const selectedCategoriesLength = selectedCategories.length;

  const toggleCategorySelectedState = (category) => {
    const selected = checkSelectedState(category);

    selected
      ? setSelectedCategories(selectedCategories.filter((c) => c !== category.id))
      : setSelectedCategories([...selectedCategories, category.id]);
  };

  const checkSelectedState = (category) => selectedCategories.includes(category.id);

  // FILTER PRODUCTS BY SELECTED CATEGORIES
  const selectedCategoriesProducts = useMemo(
    () =>
      selectedCategories.includes(CATEGORIES[0].id)
        ? products
        : products.filter((item) => selectedCategories.includes(item.categoryId)),
    [selectedCategories.length]
  );

  // SET `ALL` CATEGORY ACTIVE BY DEFAULT
  useEffect(() => {
    setSelectedCategories([categories[0].id]);
  }, []);

  return (
    <div>
      <Heading level={2} children='Business Signs Product List' className={classes.heading} />
      <Spacing className='pt-10' />
      <Categories
        checkSelected={checkSelectedState}
        toggleCategorySelectedState={toggleCategorySelectedState}
        categories={categories}
      />
      <Spacing className='pt-14' />
      {selectedCategoriesLength ? <Products items={selectedCategoriesProducts} /> : <Placeholder />}
    </div>
  );
};

export default Type1;
