export const DATA_KEY = "dotos-data";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type UpdtedTodo = {
  text: string;
  isCompleted: boolean;
};

export type Action =
  | {
      type: "SET_TODOS";
      value: Todo[];
    }
  | {
      type: "ADD_TODO";
      value: Todo;
    }
  | {
      type: "UPDATE_TODO";
      id: string;
      value: UpdtedTodo;
    }
  | {
      type: "DELETE_TODO";
      id: string;
    };
