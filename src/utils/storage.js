export const getStorageData = ({ key }) => {
  try {
    const ref = localStorage.getItem(key);
    const storage = ref ? JSON.parse(ref) : null;
    return storage;
  } catch (e) {
    return null;
  }
};

export const setStorageData = ({ key, data }) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return getStorageData(key);
  } catch (e) {
    return null;
  }
};

export const removeStorageData = ({ key }) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return null;
  }
};
