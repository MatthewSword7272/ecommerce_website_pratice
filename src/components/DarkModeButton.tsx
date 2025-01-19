import React, {useEffect, useState} from "react"
import LightPng from "../assets/website/light-mode-button.png"
import DarkPng from "../assets/website/dark-mode-button.png"

export function DarkModeButton({}) {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    })

    const element = document.documentElement

    const handleDarkMode = () => setIsDark(!isDark)

    useEffect(() => {
        if (isDark) {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDark])

    return (
        <div className={"relative"}>
            <img
                className={`w-12 absolute drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                    isDark ? "opacity-100" : "opacity-0"
                }`}
                onClick={handleDarkMode}
                src={DarkPng}
                alt="Toggle theme"
            />
            <img
                className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                    isDark ? "opacity-0" : "opacity-100"
                }`}
                onClick={handleDarkMode}
                src={LightPng}
                alt="Toggle theme"
            />
        </div>
    )
}
