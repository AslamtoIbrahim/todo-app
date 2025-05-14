import React from "react";

const TodoInput = () => {
  return (
    <div className="bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-md 
    flex items-start  gap-3 px-xm py-ym"
     >
      <label
        htmlFor="input"
        className="w-5 h-5 shrink-0 rounded-full outline-none border border-light-grayish-blue dark:border-very-dark-grayish-blue-1 cursor-pointer "
      />
      <input
        className="text-very-dark-grayish-blue self-baseline-last dark:text-light-grayish-blue text-sm 
        w-full outline-none "
        type="text"
        id="input"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default TodoInput;
