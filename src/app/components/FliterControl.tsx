import { useContext, useEffect } from "react";
import TodoManagerContext from "../store/TodoContext";
import FilterButton from "./FilterButton";
import { ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS, FILTER_KEY } from "../types/keys";

const FliterControl = () => {
  const todoManger = useContext(TodoManagerContext);


  useEffect(() => {
    const fliterStoarge = localStorage.getItem(FILTER_KEY);
    if (!fliterStoarge) return;
    todoManger.setFilterType(fliterStoarge);
  }, []);


  const onFilterClick = (value: string) => {
    todoManger.setFilterType(value);
    localStorage.setItem(FILTER_KEY, value);
  };
  return (
    <div className="flex items-center justify-center gap-5">
      <FilterButton
        isChecked={todoManger.filter === ALL_TODOS}
        value="all"
        onFliterClick={onFilterClick}
      />
      <FilterButton
        isChecked={todoManger.filter === ACTIVE_TODOS}
        value="active"
        onFliterClick={onFilterClick}
      />
      <FilterButton
        isChecked={todoManger.filter === COMPLETED_TODOS}
        value="completed"
        onFliterClick={onFilterClick}
      />
    </div>
  );
};

export default FliterControl;
