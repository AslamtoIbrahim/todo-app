import React from "react";

type FilterButtonProps = {
  text: string;
};

const FilterButton = ({ text }: FilterButtonProps) => {
  return (
    <button className="text-dark-grayish-blue text-sm md:text-base cursor-pointer
     hover:text-dark-grayish-blue/70 dark:hover:text-light-grayish-blue-hover/50
    focus:text-bright-blue capitalize font-semibold">
      {text}
    </button>
  );
};

export default FilterButton;
