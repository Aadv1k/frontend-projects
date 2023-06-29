import { Theme, FontConfig} from "./types";
import { getPreferredTheme } from "./utils";

import {useState, createContext} from "react";

export const ThemeContext = createContext<Theme>({} as Theme);

export function ThemeProvider({ children }) {
  const [font, setFont] = useState<any>(FontConfig.serif);
  const [color, setColor] = useState<any>(getPreferredTheme());

  return (
      <ThemeContext.Provider value={{font, color, setFont, setColor}}>
        {children}
      </ThemeContext.Provider>

  );
};
