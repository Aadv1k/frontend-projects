import { useState } from 'react'

import Navbar from "./components/Navbar";
import SearchInput from "./components/Search";

import Movie from "./components/Movie";

function App() {
  return (
    <>
        <main className="bg-indigo-2">
            <Navbar />

            <div className=" md:ml-24 py-4 px-4">
                <SearchInput placeholder="Search for movies or TV series" />

                <div>
                    <Movie />
                </div>
            </div>
        </main>
    </>
  )
}

export default App
