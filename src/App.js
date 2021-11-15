import React from "react";
import MrjData from "./Components/MrjData";
import UpData from "./Components/UpData";
function App() {
    return (
        <div className="flex flex-col w-screen">
            <div className="w-screen text-2xl text-white  bg-gray-800  h-12 text-center align-center center m-auto p-auto">
                Maharajganj Corona Tracker
            </div>
            <MrjData />
            <UpData />
        </div>
    );
}

export default App;
