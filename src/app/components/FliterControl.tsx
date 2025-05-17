import { useContext, useEffect, useState } from "react";
import FilterMangerContext from "../store/FilterContext";
import {
  ACTIVE_TODOS,
  ALL_TODOS,
  COMPLETED_TODOS,
  FILTER_KEY,
} from "../utils/types";
import FilterButton from "./FilterButton";

const FliterControl = () => {
  const filterManger = useContext(FilterMangerContext);

  useEffect(() => {
    const fliterStoarge = localStorage.getItem(FILTER_KEY);
    if (!fliterStoarge) return;
    filterManger.setFilterType(fliterStoarge);
  }, []);


  const onFilterClick = (value: string) => {
    filterManger.setFilterType(value);
    filterManger.setFilterType(value);
    localStorage.setItem(FILTER_KEY, value);
  };
  return (
    <div className="flex items-center justify-center gap-5">
      <FilterButton
        isChecked={filterManger.filter === ALL_TODOS}
        value="all"
        onFliterClick={onFilterClick}
      />
      <FilterButton
        isChecked={filterManger.filter === ACTIVE_TODOS}
        value="active"
        onFliterClick={onFilterClick}
      />
      <FilterButton
        isChecked={filterManger.filter === COMPLETED_TODOS}
        value="completed"
        onFliterClick={onFilterClick}
      />
    </div>
  );
};

export default FliterControl;
