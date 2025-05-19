import React, { useReducer } from "react";
import {
  Action,
  DATA_KEY,
  Todo,
  UpdtedTodo
} from "../utils/types";
import TodoManagerContext from "./TodoContext";

const modifyStorage = (todos: Todo[]) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(todos));
};


const initialState: Todo[] = [];

const todoReducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "SET_TODOS": {
      const oldTodos = [...action.value];
      modifyStorage(oldTodos);
      return oldTodos;
    }
    case "ADD_TODO": {
      const newTodo = [action.value, ...todos];
      modifyStorage(newTodo);
      return newTodo;
    }
    case "UPDATE_TODO": {
      const updatedTodo = todos.map((todo) =>
        todo.id === action.id ? { ...todo, ...action.value } : todo
      );
      modifyStorage(updatedTodo);
      return updatedTodo;
    }
    case "DELETE_TODO": {
      const newTodos = todos.filter((todo) => todo.id !== action.id);
      modifyStorage(newTodos);
      return newTodos;
    }
    case "CLEAR_COMPLETED_TODOS": {
      const uncompletedTodos = todos.filter(
        (todo) => todo.isCompleted === false
      );
      modifyStorage(uncompletedTodos);
      return uncompletedTodos;
    }

    default: {
      return todos;
    }
  }
};

const TodoManager = ({ children }: { children: React.ReactNode }) => {
   const [filter, setFilter] = React.useState("all");
   

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
  const setTodos = (todos: Todo[]) => {
    dispatchTodo({ type: "SET_TODOS", value: todos });
  };
  const addTodo = (todo: Todo) => {
    dispatchTodo({ type: "ADD_TODO", value: todo });
  };
  const updateTodo = (id: string, todo: UpdtedTodo) => {
    dispatchTodo({ type: "UPDATE_TODO", id: id, value: todo });
  };
  const deleteTodo = (id: string) => {
    dispatchTodo({ type: "DELETE_TODO", id: id });
  };

  const clearCompletedTodos = () => {
    dispatchTodo({ type: "CLEAR_COMPLETED_TODOS" });
  };

  const setFilterType = (filterType: string) => {
      setFilter(filterType);
      console.log('filterType 🟢', filterType);
      console.log('filter 🔵' , filter);
    };

  const todoValue = {
    todos: todos,
    setTodos: setTodos,
    addTodo: addTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
    clearCompletedTodos: clearCompletedTodos,
    filter: filter,
    setFilterType: setFilterType,
  };

  return (
    <TodoManagerContext.Provider value={todoValue}>
      {children}
    </TodoManagerContext.Provider>
  );
};

export default TodoManager;
