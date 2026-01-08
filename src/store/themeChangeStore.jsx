import { createContext } from "react";
import { useReducer } from "react";

export const ThemeChangeContext = createContext();

const initialTheme = {
  theme: "dark",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const ThemeChangeStore = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);
  const toggleThemeHandler = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <ThemeChangeContext.Provider
      value={{ theme: state.theme, toggleThemeHandler }}
    >
      {children}
    </ThemeChangeContext.Provider>
  );
};

export default ThemeChangeStore;
