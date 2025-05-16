import { createContext } from "react";
import { Todo, UpdtedTodo } from "../utils/types";

const defaultTodo = {
  todos: [] as Todo[],
  setTodos: (todo: Todo[]) => {},
  addTodo: (todo: Todo) => {},
  updateTodo: (id: string, todo: UpdtedTodo) => {},
  deleteTodo: (id: string) => {},
};

const TodoManagerContext = createContext(defaultTodo);

export default TodoManagerContext;
