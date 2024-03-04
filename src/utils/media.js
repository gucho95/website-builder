export const getThumb = (relativePath, size) => {
  const sizeString = `${size}x${size}`;
  const ext = relativePath.split('.').pop();
  const caption = relativePath.replace(`.${ext}`, '');
  const path = caption + '-' + sizeString + '.' + ext;
  return path;
};
