"use client";
import { ThemeProvider } from "next-themes";
import Main from "./components/Main";
import TodoManager from "./store/TodoManager";

const page = () => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        <TodoManager>
          <Main />
        </TodoManager>
      </ThemeProvider>
    </div>
  );
};

export default page;
