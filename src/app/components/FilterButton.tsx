import React from "react";

type FilterButtonProps = {
  value: string;
  isChecked: boolean;
  onFliterClick: (value: string) => void;
};

const FilterButton = ({
  value,
  isChecked,
  onFliterClick,
}: FilterButtonProps) => {
  const handleClick = () => {
    onFliterClick(value);
  };
  return (
    <button
      onClick={handleClick}
      className={` text-sm md:text-base cursor-pointer capitalize font-semibold 
        ${
          isChecked
            ? "text-bright-blue hover:text-bright-blue/90"
            : "text-dark-grayish-blue hover:text-dark-grayish-blue/70 dark:hover:text-light-grayish-blue-hover/50"
        }`}
    >
      {value}
    </button>
  );
};

export default FilterButton;
