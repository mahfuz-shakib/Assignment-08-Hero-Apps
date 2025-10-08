export const getFromLocalStorage = () => {
  const savedAPPs = localStorage.getItem("installedApps");
  if (savedAPPs) {
    return JSON.parse(savedAPPs);
  }
  return [];
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
