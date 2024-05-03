export const setToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
export const setUser = (user) =>
  localStorage.setItem("user", JSON.stringify(user));
export const getUser = () => JSON.parse(localStorage.getItem("user"));
export const removeToken = () => localStorage.removeItem("token");
export const resetLocalStorage = () => localStorage.clear();

export const setData = (data) =>
  localStorage.setItem("toDoList", JSON.stringify(data));
export const getData = () => JSON.parse(localStorage.getItem("toDoList"));

export const isLoggedIn = () => {
  return !!getToken();
};
