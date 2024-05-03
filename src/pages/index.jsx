import { Link } from "react-router-dom";
import ButtonComponent from "../component/button";
import { useContext } from "react";
import { TodoContext } from "../context";

const Index = () => {
  const { isUserLoggedIn } = useContext(TodoContext);
  return (
    <div className=" flex flex-col justify-center items-center h-96 text-center">
      <h1 className="text-gray-800 font-bold text-5xl pt-28">
        Welcome to ToDo App
      </h1>

      <div className="flex flex-row">
        <Link to={isUserLoggedIn ? "/todo-list" : "/login"}>
          <ButtonComponent>
            {isUserLoggedIn ? "View Task" : "Login"}
          </ButtonComponent>
        </Link>
      </div>
    </div>
  );
};

export default Index;
