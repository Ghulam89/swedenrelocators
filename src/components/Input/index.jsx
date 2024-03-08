import React from "react";

const Input = ({
  label,
  placeholder,
  name,
  type,

  className,
  onChange,
  value,
  Icon,
  required,
  star
}) => {
  return (
    <div className=" relative  ">
      <label
        htmlFor="first_name"
        className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
      >
      <a className=" tw-text-red-600 tw-font-semibold">{star}</a>  {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
        type={type}
        required={required}
        className={`  tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark placeholder:tw-text-gray tw-rounded-md  ${className}`}
      />
      <div className=" tw-absolute tw-right-3 tw-top-3">
        <i>{Icon}</i>
      </div>
    </div>
  );
};

export default Input;
