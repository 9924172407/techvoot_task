import { Navigate } from "react-router-dom";
import { removeToken, resetLocalStorage } from "../utils/helper";
import { useContext } from "react";
import { TodoContext } from "../context";

const Logout = () => {
  const { resetContext } = useContext(TodoContext);
  resetContext();
  removeToken();
  resetLocalStorage();
  return <Navigate to="/login" />;
};

export default Logout;
