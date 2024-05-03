import { useContext, useState } from "react";
import { TodoContext } from "../context";
import InputField, { InputTextField } from "../component/input";
import ButtonComponent from "../component/button";
import { MdDeleteOutline } from "react-icons/md";

const ToDoDetails = () => {
  const { toDoList, addData, deleteData } = useContext(TodoContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "title":
        error = value.trim() ? "" : "Title is required";
        break;
      case "description":
        error = value.trim() ? "" : "Description is required";
        break;
      default:
        break;
    }
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    for (const key in formData) {
      handleChange({
        target: {
          name: key,
          value: formData[key],
        },
      });
      if (errors[key]) {
        isValid = false;
      }
    }
    if (isValid && formData.title !== "" && formData.description !== "") {
      addData(formData);
      setFormData({
        title: "",
        description: "",
      });
    }
  };
  const handleChange = (e) => {
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
  return (
    <div className="w-full flex flex-col justify-center items-center m-auto">
      <h1 className="font-bold text-2xl my-3 ">Task Details</h1>
      <div className="w-full border border-gray-200 p-2 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row w-full justify-center items-center align-middle"
        >
          <InputField
            name={"title"}
            title={"Title"}
            onChange={handleChange}
            value={formData.title}
            error={errors.title}
          />
          <InputTextField
            type={"text"}
            name={"description"}
            title={"Description"}
            onChange={handleChange}
            value={formData.description}
            error={errors.description}
          />
          <ButtonComponent type={"submit"}>Add Task</ButtonComponent>
        </form>
      </div>
      <div className="w-5/6">
        <ul className="">
          {toDoList?.map((item, i) => {
            return (
              <div
                key={i}
                className="w-full md:w-auto shadow-md p-3 m-3 rounded-sm flex flex-row gap-4 h-36 justify-between items-center"
              >
                <div>
                  <h1 className="capitalize font-bold text-2xl">
                    {item?.title}
                  </h1>
                  <p className="text-wrap">{item?.description}</p>
                </div>

                <MdDeleteOutline
                  color="red"
                  size={40}
                  onClick={() => deleteData(item.id)}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDoDetails;
