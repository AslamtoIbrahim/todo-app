import { useContext, useEffect, useRef } from "react";
import TodoManagerContext from "../store/TodoContext";
import { Todo } from "../types/types";

const TodoInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const todoManger = useContext(TodoManagerContext);

  // add a todo by clicking the enter key
  useEffect(() => {
    ref.current?.focus();
    const addTodoByEnterKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" && ref.current) {
        // don't add empty todo if focus is false
        if (ref.current !== document.activeElement) return;

        const todoText = ref.current.value;
        console.log("type 🟨: ", todoText);

        // do not add empty todo
        if (!todoText && todoText.trim() === "") return;

        const newTodo: Todo = {
          id: crypto.randomUUID(),
          text: todoText,
          isCompleted: false,
        };

        todoManger.addTodo(newTodo);
        ref.current.value = "";
 
      }
    };
    document.addEventListener("keydown", addTodoByEnterKey);

    return () => {
      document.removeEventListener("keydown", addTodoByEnterKey);
    };
  }, []);

  return (
    <div
      className="bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-md 
    flex items-start  gap-3 px-xm py-ym md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg"
    >
      <label
        htmlFor="input"
        className="w-5 h-5 shrink-0 rounded-full outline-none border border-light-grayish-blue dark:border-very-dark-grayish-blue-1 cursor-pointer "
      />
      <input
        ref={ref}
        className="text-very-dark-grayish-blue self-baseline-last dark:text-light-grayish-blue text-sm md:text-base
        w-full outline-none "
        type="text"
        id="input"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default TodoInput;
