import { useContext, useEffect } from "react";
import FilterMangerContext from "../store/FilterContext";
import TodoManagerContext from "../store/TodoContext";
import {
  ACTIVE_TODOS,
  COMPLETED_TODOS,
  FILTER_KEY,
  Todo
} from "../utils/types";
import TodoItem from "./TodoItem";

const TodoItemsList = () => {
  const filterManger = useContext(FilterMangerContext);
  const todoManager = useContext(TodoManagerContext);

  useEffect(() => {
    const filterStore = localStorage.getItem(FILTER_KEY) || "all";
    filterManger.setFilterType(filterStore);
  }, []);


  const filterTodos = (): Todo[] => {
    switch (filterManger.filter) {
      case ACTIVE_TODOS:
        return todoManager.todos.filter((todo) => todo.isCompleted === false);
      case COMPLETED_TODOS:
        return todoManager.todos.filter((todo) => todo.isCompleted === true);
      default:
        return todoManager.todos;
    }
  };

  return (
    <>
      {filterTodos().map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isCompleted={todo.isCompleted}
        />
      ))}
    </>
  );
};

export default TodoItemsList;
