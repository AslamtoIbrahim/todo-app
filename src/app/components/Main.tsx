"use client";
import { useEffect, useState } from "react";
import FilterView from "./FilterView";
import ThemeButton from "./ThemeButton";
import TodoInput from "./TodoInput";
import TodoListView from "./TodoListView";
import { THEME_KEY } from "../types/keys";

const Main = () => {
  const [theme, setTheme] = useState("system");
  const [ismounted, setIsmounted] = useState(false);
  const changeMode = (mode: string) => {
    const htmlElement = window.document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(mode);
  };

  useEffect(() => {
    setIsmounted(true);
  }, [ismounted]);

  useEffect(() => {
    if (!ismounted) {
      return;
    }

    const mode = localStorage.getItem(THEME_KEY) || "system";
    if (mode === "system") {
      const themeSystem = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setTheme(themeSystem);
      changeMode(themeSystem);
      return;
    }

    setTheme(mode);

    changeMode(mode);
  }, [ismounted]);

  const onClickThemeListener = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    changeMode(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  if (!ismounted) {
    return null;
  }

  return (
    <main
      className="bg-ml xs:bg-dl dark:bg-md dark:xs:bg-dd bg-contain bg-no-repeat font-jose h-screen 
      px-4 py-12 "
    >
      <div className="flex flex-col gap-5 md:gap-10 xs:mx-6  md:max-w-xl lg:max-w-2xl xl:max-w-4xl md:mx-auto ">
        <section className="flex justify-between items-center">
          <p className="text-very-light-gray text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-[0.2em] lg:tracking-[0.5em]">
            TODO
          </p>
          <ThemeButton themeButtonClick={onClickThemeListener} />
        </section>
        <section className="flex flex-col gap-4 ">
          <TodoInput />
          <TodoListView />
          <FilterView />
        </section>
        <section>
          <p className="text-dark-grayish-blue text-center text-sm md:text-base xl:text-lg">
            Darg and drop to reorder list
          </p>
        </section>
      </div>
    </main>
  );
};

export default Main;
