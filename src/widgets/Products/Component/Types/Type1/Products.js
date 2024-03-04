import CardComponent from '@widgets/Card/Component/Types/Type4';

const Product = (props) => {
  return <CardComponent {...props} />;
};

const Products = ({ items }) => {
  return (
    <div className='grid grid-cols-4 gap-7'>
      {items.map((item, key) => (
        <Product key={key} {...item} />
      ))}
    </div>
  );
};

export default Products;
