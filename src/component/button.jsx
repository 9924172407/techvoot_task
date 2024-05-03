const ButtonComponent = (props) => {
  return (
    <div className="p-3 m-3 w-full md:w-auto">
      <button
        {...props}
        className="w-full p-2 m-2 rounded-xl bg-blue-600 text-white px-5 py-3"
      />
    </div>
  );
};

export default ButtonComponent;
