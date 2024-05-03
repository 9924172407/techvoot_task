import PropTypes from "prop-types";

const InputField = ({ title, name, value, type, onChange, error }) => {
  return (
    <div className="w-full md:w-auto m-1 p-1 flex flex-col text-left">
      <label htmlFor={name} className="pl-2">
        {title}
      </label>
      <input
        type={type ? type : "text"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-xl p-3 m-1 border border-gray-400"
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default InputField;

export const InputTextField = ({
  title,
  name,
  value,
  type,
  onChange,
  error,
}) => {
  return (
    <div className="w-full md:w-2/3 m-1 p-1 flex flex-col text-left">
      <label htmlFor={name} className="pl-2">
        {title}
      </label>
      <textarea
        type={type ? type : "text"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-xl p-3 m-1 border border-gray-400"
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

InputTextField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
