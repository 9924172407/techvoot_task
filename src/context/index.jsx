import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getData, isLoggedIn, setData, setToken } from "../utils/helper";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
export const TodoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(getData() || []);
  const [user, setUser] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn() || false);

  const setUserData = (data) => {
    setUser(data);
    setIsUserLoggedIn(true);
    setToken(uuidv4);
  };

  const addData = (data) => {
    let tempData = {
      id: toDoList.length + 1,
      title: data.title,
      description: data.description,
    };
    setToDoList([...toDoList, tempData]);
    setData([...toDoList, tempData]);
  };
  const deleteData = (id) => {
    let temp = toDoList?.filter((toDo) => toDo.id !== id);
    setToDoList(temp);
    setData(temp);
    toast.success("Task Deleted Successfully");
  };

  const resetContext = () => {
    setToDoList([]);
    setUser({});
    setIsUserLoggedIn(false);
  };

  const value = {
    toDoList,
    setToDoList,
    user,
    setUserData,
    addData,
    deleteData,
    resetContext,
    isUserLoggedIn,
    setIsUserLoggedIn,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
ToDoProvider.propTypes = {
  children: PropTypes.node,
};

export default ToDoProvider;
