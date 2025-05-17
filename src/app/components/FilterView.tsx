import React, { useEffect, useState } from "react";
import FliterControl from "./FliterControl";
 

// flite view for mobile screens
const FilterView = () => {

  return (
    <div
      className="bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-md 
     md:hidden px-xm py-ym lg:px-xlg lg:py-ylg"
    >
      <FliterControl />
    </div>
  );
};

export default FilterView;
