import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import ClearButton from "./ClearButton";
import FilterButton from "./FilterButton";
import { DATA_KEY, Todo } from "../utils/types";
import TodoManagerContext from "../store/TodoContext";

const TodoListView = () => {
  const todoManger = useContext(TodoManagerContext);

  // here goes logic of setting todos data
  useEffect(() => {
    const todosStorage = localStorage.getItem(DATA_KEY);
    if (!todosStorage) return;

    const dotos: Todo[] = JSON.parse(todosStorage);
    todoManger.setTodos(dotos);
  }, []);

  return (
    <div
      className="bg-very-light-gray dark:bg-very-dark-desaturated-blue min-h-96 max-h-[35rem]  rounded-md 
                shadow-xl shadow-dark-grayish-blue/15 dark:shadow-none flex flex-col justify-between "
    >
      <section className="overflow-auto">
        {todoManger.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
          />
        ))}
      </section>
      <section
        className="w-full flex justify-between items-center px-xm py-ym md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg
       text-dark-grayish-blue text-sm md:text-base xl:text-lg"
      >
        <p>5 items left</p>
        <section className="hidden md:flex items-center justify-center gap-5 ">
          <FilterButton text="all" />
          <FilterButton text="active" />
          <FilterButton text="completed" />
        </section>
        <ClearButton />
      </section>
    </div>
  );
};

export default TodoListView;
