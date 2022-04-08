import { createContext, useState } from "react";

export type ThemeContextProps = {
  theme: string;
  setTheme: (userAccount: string) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider: React.FC = (props) => {
  const [theme, setTheme] = useState('light');

  const providerValue = {
    theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};