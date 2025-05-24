import { createContext } from "react";
import { Todo, UpdtedTodo } from "../types/types";

const defaultTodo = {
  todos: [] as Todo[],
  setTodos: (_todo: Todo[]) => {},
  addTodo: (_todo: Todo) => {},
  updateTodo: (_id: string, _todo: UpdtedTodo) => {},
  deleteTodo: (_id: string) => {},
  clearCompletedTodos: () => {},
  filter: "all",
  setFilterType: (_filterType: string) => {},
};

const TodoManagerContext = createContext(defaultTodo);

export default TodoManagerContext;

 