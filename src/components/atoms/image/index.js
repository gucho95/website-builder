const Image = ({ alt, src, ...imgProps }) => {
  console.log('image', alt);
  return <img src={src} alt={alt} {...imgProps} />;
};

export default Image;
