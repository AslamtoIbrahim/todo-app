import { ThemeProvider } from "next-themes";
import Main from "./components/Main";

const page = () => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        <Main />
      </ThemeProvider>
    </div>
  );
};

export default page;
