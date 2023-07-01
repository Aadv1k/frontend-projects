import { useState, useContext } from 'react'

import { ThemeContext, ThemeProvider} from "./ThemeContext";

import Navbar from "./Navbar";

export default function App() {

  return (
    <ThemeProvider>
        <main className="min-h-screen w-screen">
            <Navbar />
        </main>
    </ThemeProvider>
  )
}
