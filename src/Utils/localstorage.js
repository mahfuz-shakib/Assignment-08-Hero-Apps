export const getFromLocalStorage = () => {
  try {
    const savedAPPs = localStorage.getItem("installedApps");
    return savedAPPs ? JSON.parse(savedAPPs) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addToLocalStorage = (id) => {
  const existedApps = getFromLocalStorage();
  existedApps.push(id);
  saveToLocalStorage(existedApps);
};
export const removeFromLocalStorage = (appId) => {
  const existedApps = getFromLocalStorage();
  const filteredApps = existedApps.filter((id) => id !== appId);
  saveToLocalStorage(filteredApps);
};
export const saveToLocalStorage = (apps) => {
  const stringifyApp = JSON.stringify(apps);
  localStorage.setItem("installedApps", stringifyApp);
};
