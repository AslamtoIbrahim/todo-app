import { useContext, useEffect } from "react";
import TodoManagerContext from "../store/TodoContext";
import { DATA_KEY, Todo } from "../utils/types";
import ClearButton from "./ClearButton";
import FliterControl from "./FliterControl";
import TodoItemsList from "./TodoItemsList";

const TodoListView = () => {
  const todoManger = useContext(TodoManagerContext);
  // here goes logic of setting todos data
  useEffect(() => {
    const todosStorage = localStorage.getItem(DATA_KEY);
    if (!todosStorage) return;
    const todos: Todo[] = JSON.parse(todosStorage);
    todoManger.setTodos(todos);
    console.log("🧧 todos ", todos);
  }, []);

  const setOnClearButtonLisitener = () => {
    todoManger.clearCompletedTodos();
  };

  // get amount of todos left
  const todosLeft = todoManger.todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  return (
    <div
      className="bg-very-light-gray dark:bg-very-dark-desaturated-blue min-h-96 max-h-[35rem]  rounded-md 
                shadow-xl shadow-dark-grayish-blue/15 dark:shadow-none flex flex-col justify-between "
    >
      <section className="overflow-auto">
        <TodoItemsList />
      </section>
      <section
        className="w-full flex justify-between items-center px-xm py-ym md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg
       text-dark-grayish-blue text-sm md:text-base xl:text-lg"
      >
        <p>{`${todosLeft} item${todosLeft > 1 ? "s" : ""} left`}</p>
        <section className="hidden md:flex items-center justify-center gap-5 ">
          <FliterControl />
        </section>
        <ClearButton onClearButtonClick={setOnClearButtonLisitener} />
      </section>
    </div>
  );
};

export default TodoListView;
