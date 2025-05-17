import React from "react";
import FilterMangerContext from "./FilterContext";

const FilterManager = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = React.useState("all");
  const setFilterType = (filterType: string) => {
    setFilter(filterType);
    console.log('filterType 🟢', filterType);
    console.log('filter 🔵' , filter);
  };
  const fiterValue = {
    filter: filter,
    setFilterType: setFilterType,
  };
  return (
    <FilterMangerContext.Provider value={fiterValue}>
      {children}
    </FilterMangerContext.Provider>
  );
};

export default FilterManager;
