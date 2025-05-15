import React from "react";

type Props = {
  themeButtonClick: () => void;
};

const ThemeButton = ({ themeButtonClick }: Props) => {
  return (
    <button onClick={themeButtonClick} className="h-7 w-7 bg-moon dark:bg-sun bg-no-repeat cursor-pointer" />
  );
};

export default ThemeButton;
