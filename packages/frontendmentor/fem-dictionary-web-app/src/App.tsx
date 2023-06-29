import { useState, useContext } from 'react'

import { ThemeContext, ThemeProvider} from "./ThemeContext";

import Navbar from "./Navbar";

export default function App() {
  return (
    <ThemeProvider>
        <Navbar />
    </ThemeProvider>
  )
}
