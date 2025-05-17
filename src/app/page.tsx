"use client";
import { ThemeProvider } from "next-themes";
import Main from "./components/Main";
import TodoManager from "./store/TodoManager";
import FilterManager from "./store/FilterManager";

const page = () => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        <TodoManager>
          <FilterManager>
            <Main />
          </FilterManager>
        </TodoManager>
      </ThemeProvider>
    </div>
  );
};

export default page;
