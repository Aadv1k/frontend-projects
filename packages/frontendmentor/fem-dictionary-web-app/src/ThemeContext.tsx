import { Theme, FontConfig} from "./types";
import { getPreferredTheme } from "./utils";

import {useState, createContext} from "react";

const ThemeContext = createContext<Theme>({} as Theme);

export default function ThemeProvider({ children }) {
  const [font, setFont] = useState<any>(FontConfig.sans);
  const [color, setColor] = useState<any>(getPreferredTheme());

  return (
      <ThemeContext.Provider value={{font, color}}>
       {children}
      </ThemeContext.Provider>

  );
};
