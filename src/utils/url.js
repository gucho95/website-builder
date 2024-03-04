export const getSearchParam = ({ search, key }) => {
  try {
    const urlParams = new URLSearchParams(search);
    const value = urlParams.get(key);
    return value;
  } catch (err) {
    return null;
  }
};

export const setSearchParams = ({ search, params }) => {
  try {
    const urlParams = new URLSearchParams(search);
    params.forEach(({ key, value }) => urlParams.set(key, value));
    return urlParams.toString();
  } catch (err) {
    return null;
  }
};

export const appendSearchParams = ({ search, params }) => {
  try {
    const urlParams = new URLSearchParams(search);
    params.forEach(({ key, value }) => urlParams.append(key, value));
    return urlParams.toString();
  } catch (err) {
    return null;
  }
};

export const deleteSearchParams = ({ search, keys }) => {
  try {
    const urlParams = new URLSearchParams(search);
    keys.forEach((key) => urlParams.delete(key));
    return urlParams.toString();
  } catch (err) {
    return null;
  }
};
