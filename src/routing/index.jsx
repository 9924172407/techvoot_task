import { Link, Route, Routes } from "react-router-dom";
import { userRoutes } from "./route";
import ProtectedRoute from "./protectedRoute";
import { useContext } from "react";
import { TodoContext } from "../context";

const Routing = () => {
  const { isUserLoggedIn, user } = useContext(TodoContext);
  return (
    <>
      <div className="w-full flex flex-row justify-center gap-3 items-center m-auto bg-blue-600 relative py-5">
        <Link
          to="/"
          className="font-bold absolute left-10 text-2xl my-3 text-white "
        >
          To Do App
        </Link>
        <Link to={"/todo-list"} className="text-white font-bold">
          View Task
        </Link>
        {isUserLoggedIn && (
          <Link
            to={"/logout"}
            className="text-white absolute right-10 font-bold"
          >
            <span className="text-white pr-5">{user.name}</span>
            Logout
          </Link>
        )}
      </div>
      <Routes>
        {userRoutes?.map((item, index) =>
          item.isProtected ? (
            <Route
              key={index}
              path={item.path}
              element={<ProtectedRoute>{item.element}</ProtectedRoute>}
            />
          ) : (
            <Route key={index} path={item.path} element={item.element} />
          )
        )}
      </Routes>
    </>
  );
};

export default Routing;
