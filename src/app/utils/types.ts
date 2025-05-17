export const THEME_KEY = "theme";
export const DATA_KEY = "dotos-data";
export const FILTER_KEY = "dotos-filter";

export const ALL_TODOS = "all";
export const ACTIVE_TODOS = "active";
export const COMPLETED_TODOS = "completed";

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
