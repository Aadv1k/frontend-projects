import { useState, useContext } from 'react'
import { ThemeContext } from "./ThemeContext";
import { getFontString } from "./utils";

export default function Navbar() {
    const theme = useContext(ThemeContext);
    console.log(theme);
    return (
        <nav className={`font-${theme.font}`}>
            <h1>welcome to the navbabr</h1>
            <h1>something else to the navbabr</h1>
            <button>something else</button>
        </nav>
    )
}
