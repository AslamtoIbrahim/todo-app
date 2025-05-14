import React from "react";
import TodoItem from "./TodoItem";
import ClearButton from "./ClearButton";

const TodoListView = () => {
  return (
    <div
      className="bg-very-light-gray dark:bg-very-dark-desaturated-blue h-96 rounded-md 
                shadow-xl shadow-dark-grayish-blue/15 dark:shadow-none flex flex-col "
    >
      <section>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </section>
      <section className="w-full flex justify-between items-center place-self-end px-xm py-ym bg-lime-400">
        <p>5 item left</p>
        <ClearButton />
      </section>
    </div>
  );
};

export default TodoListView;
