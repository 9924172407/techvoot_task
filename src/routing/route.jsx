import ToDoDetails from "../pages/todo-list";
import Login from "../pages/login";
import Logout from "./logout";
import Index from "../pages";

export const userRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Index />,
    isProtected: false,
  },
  {
    name: "To-Do List",
    path: "/todo-list",
    element: <ToDoDetails />,
    isProtected: true,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
    isProtected: false,
  },
  {
    name: "Logout",
    path: "/logout",
    element: <Logout />,
    isProtected: true,
  },
  {
    name: "Page Not Found",
    path: "*",
    element: (
      <div className="flex flex-col m-auto justify-center items-center ">
        <h1 className="text-black-400 text-3xl font-bold pt-20">
          Page Not Found
        </h1>
      </div>
    ),
    isProtected: false,
  },
];
