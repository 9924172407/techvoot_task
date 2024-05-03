import { useContext, useState } from "react";
import InputField from "../component/input";
import ButtonComponent from "../component/button";
import { dummyUser } from "../constant";
import { TodoContext } from "../context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { setUserData } = useContext(TodoContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        error = value.trim() ? "" : "Email is required";
        break;
      case "password":
        error = value.trim() ? "" : "Password is required";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    setFormData((item) => ({
      ...item,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    for (const key in formData) {
      handleInputChange({
        target: {
          name: key,
          value: formData[key],
        },
      });
      if (errors[key]) {
        isValid = false;
      }
    }
    if (isValid && formData.email !== "" && formData.password !== "") {
      const res = dummyUser?.find(
        (user) =>
          user.email.toLowerCase() === formData.email.toLowerCase() &&
          user.password === formData.password
      );
      if (res) {
        setUserData(res);
        toast.success("You are successfully loggedIn");

        navigate("/todo-list");
      } else {
        toast.error("Invalid Email or Password");
      }
    }
  };
  return (
    <div className="flex justify-center items-center flex-col m-auto pt-32">
      <h1 className="font-bold text-4xl pb-16">Login</h1>
      <div className="w-full sm:w-4/5 md:w-2/6">
        <form onSubmit={handleSubmit} className="">
          <InputField
            name={"email"}
            title={"Email"}
            type={"email"}
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <InputField
            name={"password"}
            title={"Password"}
            type={"password"}
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <div className="flex justify-center items-center">
            <ButtonComponent type={"submit"}>Login</ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
