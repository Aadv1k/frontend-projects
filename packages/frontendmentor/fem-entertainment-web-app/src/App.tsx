import { useState } from 'react'

import NavButton from "./components/NavButton";

import {
    BsGridFill as GridIcon,
} from "react-icons/bs";

import {
    BiSolidFilm as FilmIcon
} from "react-icons/bi"

//import { SlFilm as FilmIcon } from "react-icons/sl";






function App() {
  return (
    <>
        <main className="bg-indigo-2">
            <NavButton icon={<GridIcon />} />
            <NavButton icon={<FilmIcon />} />
        </main>
    </>
  )
}

export default App
