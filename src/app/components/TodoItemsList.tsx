import { useContext, useEffect, useState } from "react";
import FilterMangerContext from "../store/FilterContext";
import TodoManagerContext from "../store/TodoContext";
import {
  ACTIVE_TODOS,
  COMPLETED_TODOS,
  FILTER_KEY,
  Todo,
} from "../utils/types";
import TodoItem from "./TodoItem";

const TodoItemsList = () => {
  const filterManger = useContext(FilterMangerContext);
  const todoManager = useContext(TodoManagerContext);
  const [dragIndex, setDragIndex] = useState(-1);

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

  // this is very important to enable dragging
  const handleOndragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDragItemHandler = (index: number) => {
    console.log("🟣 Drag", index);
    setDragIndex(index);
  };
  const onDropItemHandler = (index: number) => {
    console.log("🤎 Drop", index);
    console.log("💙 Drag", dragIndex);
    if (dragIndex === -1 || dragIndex === index) return;
    const newTodos = [...todoManager.todos];
    const draggedItem = newTodos[dragIndex];
    newTodos.splice(dragIndex, 1);
    newTodos.splice(index, 0, draggedItem);
    todoManager.setTodos(newTodos);
    setDragIndex(-1);
  };

  return (
    <>
      {filterTodos().map((todo, index) => (
        <TodoItem
          ondragOver={handleOndragOver}
          onDragItem={() => onDragItemHandler(index)}
          onDropItem={() => onDropItemHandler(index)}
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
