import React from 'react'
import { Link } from "react-router-dom";

import { Search } from "./Search";


export const NavBar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/" >
                <p className="text-2xl font-bold py-1 px-2 bg-blue-200 dark:bg-gray-500 dark:text-white">
                    Google ⚲
                </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-500 dark:text-white bg-white border rounded-full px-2 py-1 hover:shadow-lg">
                    {darkTheme ? "Light Mode ☀︎" : "Dark Mode ☽"}
                </button>
            </div>
            <Search />
        </div>
    )
};