import React from "react";
function MrjData(props) {
    return (
        <div className="flex flex-col justify-center center">
            <div className="text-center text-2xl border-separate border-red rounded-xl m-5 py-5 h-60 w-60  bg-red-400 border-solid border-red-700 border-opacity-15 border-4 hover:bg-red-600 hover:scale-110 cursor-pointer transition-all transition-300 ease-linear">
                {props.title}
                <hr className="m-5" />
                <div className="m-10 p-auto text-2xl text-white">
                    {props.value}
                </div>
            </div>
        </div>
    );
}
export default MrjData;
