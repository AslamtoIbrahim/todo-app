"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Todo } from "../utils/types";
import TodoManagerContext from "../store/TodoContext";

const TodoItem = ({ id, text, isCompleted }: Todo) => {

  const [isCheck, setIsCheck] = useState(isCompleted);
  const [isEdited, setIsEdited] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const todoManger = useContext(TodoManagerContext);


  useEffect(() => {
    if (!isEdited) {
      return;
    }
    ref.current!.value = text;
    ref.current!.focus();
  }, [isEdited]);

  useEffect(() => {
    const todoUpdateListener = (event: KeyboardEvent) => {
      if (event.key !== "Enter") return;

      if (ref.current !== document.activeElement) return;

      const newText = ref.current!.value.trim();
      if (newText === text || newText === ""){
        setIsEdited(false);
        return;
      }

      const updateTodo = {
        text: newText,
        isCompleted: isCompleted,
      };

      todoManger.updateTodo(id, updateTodo);
      setIsEdited(false);

    };

    window.addEventListener("keydown", todoUpdateListener);

    return () => window.removeEventListener("keydown", todoUpdateListener);
  }, []);

  const clickCheckHandler = () => {
    const newIsCheck = !isCheck;
    const updateTodo = {
      text: text,
      isCompleted: newIsCheck,
    };
    todoManger.updateTodo(id, updateTodo);
    setIsCheck(newIsCheck);
  };

  const clickDeleteHandler = () => {
    todoManger.deleteTodo(id);
  };
  const clickUpdateHandler = () => {
    setIsEdited(true);
  };


  return (
    <section>
      <div className="w-full flex justify-between items-center gap-3 py-ym px-xm md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg">
        <button
          onClick={clickCheckHandler}
          className={`w-5 h-5 shrink-0 rounded-full  cursor-pointer outline-none
            ${
              isCheck
                ? `bg-check bg-no-repeat bg-center`
                : `border border-light-grayish-blue dark:border-very-dark-grayish-blue-1`
            }`}
        />
        <section className="w-full">
          {isEdited ? (
            <input
              className="text-very-dark-grayish-blue self-baseline-last dark:text-light-grayish-blue text-sm md:text-base
              w-full outline-none"
              type="text"
              ref={ref}
            />
          ) : (
            <p
              onClick={clickUpdateHandler}
              className={`text-sm md:text-base xl:text-lg text-very-dark-grayish-blue dark:text-light-grayish-blue text-start ${
                isCheck ? "line-through" : ""
              }`}
            >
              {text}
            </p>
          )}
        </section>
        <button
          onClick={clickDeleteHandler}
          className="w-4 h-4  rounded-full shrink-0 bg-cross bg-no-repeat bg-center cursor-pointer "
        />
      </div>
      <hr className="border-0 border-t-1 border-light-grayish-blue dark:border-very-dark-grayish-blue" />
    </section>
  );
};

export default TodoItem;
