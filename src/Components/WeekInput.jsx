function WeekInput(props) {
  const { placeholder, onChange, ...inputProps } = props;

  return (
    <div className="h-8 w-2/4 flex flex-col  justify-center mt-4">
      <input
        className="bg-bridal-heath-500 leading-none rounded-sm shadow-sm required:border-red-500 focus:outline-none focus:shadow-outline text-gray-600 font-medium border-sambuca-300 border-2 "
        placeholder={placeholder}
        {...inputProps}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default WeekInput;
