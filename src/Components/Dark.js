import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
export default function Dark() {
    const [visible, setVisible] = useState(false);
    const handleButton = () => {
        let handle = document.querySelector("#dark");
        if (!visible) {
            handle.classList.add("dark");
        } else {
            handle.classList.remove("dark");
        }
        setVisible(!visible);
    };
    var buttonText = visible ? "dark" : "light";
    return (
        <div id="dark" className="h-screen">
            <h1 className="dark:bg-primary dark:text-white">
                {buttonText} mode is here
            </h1>
            <div className="transition-all transition-300">
                {visible ? (
                    <FaMoon onClick={handleButton} />
                ) : (
                    <FaSun onClick={handleButton} />
                )}
            </div>
        </div>
    );
}
