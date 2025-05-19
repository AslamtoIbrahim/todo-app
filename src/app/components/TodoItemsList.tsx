import { useContext, useEffect, useState } from "react";
import TodoManagerContext from "../store/TodoContext";
import {
  ACTIVE_TODOS,
  COMPLETED_TODOS,
  FILTER_KEY,
  Todo,
} from "../utils/types";
import TodoItem from "./TodoItem";

const TodoItemsList = () => {
  const todoManager = useContext(TodoManagerContext);
  const [dragId, setDragId] = useState("");

  useEffect(() => {
    const filterStore = localStorage.getItem(FILTER_KEY) || "all";
    todoManager.setFilterType(filterStore);
  }, []);

  const filterTodos = (): Todo[] => {
    switch (todoManager.filter) {
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
    e.currentTarget.classList.add("drop");
    e.preventDefault();
  };
  const onDragLeaveItemHandler = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("drop");
  };

  const onDragStartItemHandler = (id: string, e: React.DragEvent) => {
    e.currentTarget.classList.add("drag");
    setDragId(id);
  };
  const onDragEndItemHandler = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("drag");
  };

  const onDropItemHandler = (id: string, e: React.DragEvent) => {

    if (dragId === "" || dragId === id) return;

    const newTodos = [...todoManager.todos];
    const dragIndex = newTodos.findIndex((todo) => todo.id === dragId);
    const dropIndex = newTodos.findIndex((todo) => todo.id === id);
    const draggedItem = newTodos[dragIndex];
    newTodos.splice(dragIndex, 1);
    newTodos.splice(dropIndex, 0, draggedItem);
    todoManager.setTodos(newTodos);
    setDragId("");
    e.currentTarget.classList.remove("drop");

  };

  return (
    <>
      {filterTodos().map((todo) => (
        <TodoItem
          ondragOver={handleOndragOver}
          ondragLeave={onDragLeaveItemHandler}
          onDragStartItem={(e: React.DragEvent) =>
            onDragStartItemHandler(todo.id, e)
          }
          onDragEndItem={onDragEndItemHandler}
          onDropItem={(e: React.DragEvent) => onDropItemHandler(todo.id, e)}
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
