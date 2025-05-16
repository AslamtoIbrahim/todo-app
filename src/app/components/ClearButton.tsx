import React from "react";

type Props = {
  onClearButtonClick: () => void;
};
const ClearButton = ({ onClearButtonClick }: Props) => {
  return (
    <button
      onClick={onClearButtonClick}
      className="text-dark-grayish-blue text-sm md:text-base xl:text-lg cursor-pointer hover:text-dark-grayish-blue/70 dark:hover:text-light-grayish-blue-hover/50"
    >
      Clear Completed
    </button>
  );
};

export default ClearButton;
