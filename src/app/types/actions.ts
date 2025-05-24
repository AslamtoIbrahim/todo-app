import { Todo, UpdtedTodo } from "./types";

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
    }
  | {
      type: "CLEAR_COMPLETED_TODOS";
    };

export type FilterAction =
  | {
      type: "SET_FILTER_TODOS";
      value: Todo[];
    }
  | { type: "FILTER_TODOS"; filter: string; value: Todo[] };
