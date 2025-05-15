'use client'
import React, { useState } from "react";

const TodoItem = () => {
  const [isCheck, setIsCheck] = useState(false);
  const clickCheckHandler = () => {
    setIsCheck(!isCheck);
  }
  return (
    <section>
        <div className="w-full flex justify-between items-center gap-3 py-ym px-xm md:px-xmd md:py-ymd lg:px-xlg lg:py-ylg">
          <button onClick={clickCheckHandler} className={`w-5 h-5 shrink-0 rounded-full  cursor-pointer outline-none
            ${isCheck ? `bg-check bg-no-repeat bg-center` : `border border-light-grayish-blue dark:border-very-dark-grayish-blue-1`}`} />
          <p className={`text-sm md:text-base xl:text-lg text-very-dark-grayish-blue dark:text-light-grayish-blue text-start w-full ${isCheck ? 'line-through' : ''}`}>
            Hello guys what are
          </p>
          <button className="w-4 h-4  rounded-full shrink-0 bg-cross bg-no-repeat bg-center cursor-pointer " />
        </div>
        <hr className="border-0 border-t-1 border-light-grayish-blue dark:border-very-dark-grayish-blue" />
    </section>

  );
};

export default TodoItem;
