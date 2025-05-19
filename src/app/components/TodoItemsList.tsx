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
    e.preventDefault();
  };

  const onDragItemHandler = (id: string) => {
    const dragIndex = todoManager.todos.findIndex((todo) => todo.id === id);
    console.log("🟣 Drag index: ", dragIndex);
    setDragId(id);
  };

  const onDropItemHandler = (id: string) => {
    if (dragId === "" || dragId === id) return;

    const newTodos = [...todoManager.todos];
    const dragIndex = newTodos.findIndex((todo) => todo.id === dragId);
    const dropIndex = newTodos.findIndex((todo) => todo.id === id);
    const draggedItem = newTodos[dragIndex];
    newTodos.splice(dragIndex, 1);
    newTodos.splice(dropIndex, 0, draggedItem);
    todoManager.setTodos(newTodos);
    setDragId("");
    console.log("🤎 Drop", dropIndex);
    console.log("💙 Drag", dragIndex);
  };

  return (
    <>
      {filterTodos().map((todo) => (
        <TodoItem
          ondragOver={handleOndragOver}
          onDragItem={() => onDragItemHandler(todo.id)}
          onDropItem={() => onDropItemHandler(todo.id)}
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
