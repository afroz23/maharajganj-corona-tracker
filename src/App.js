import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import MrjData from "./Components/MrjData";
import MrjImage from "../src/mrj.png";
import UpData from "./Components/UpData";
function App() {
    const url = "https://data.covid19india.org/v4/min/data.min.json";
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.UP);
            setLoading(false);
            console.log(jsonData.UP);
        }
        fetchData();
    }, []);

    const mrjData = [
        {
            id: 1,
            title: "Confirmed cases",
            value: data && data.districts.Maharajganj.total.confirmed,
        },
        {
            id: 2,
            title: "Active cases",
            value: data && data.districts.Maharajganj.delta21_14.confirmed,
        },
        {
            id: 3,
            title: "Recovered cases",
            value: data && data.districts.Maharajganj.total.recovered,
        },
        {
            id: 4,
            title: "Total deaths",
            value: data && data.districts.Maharajganj.total.deceased,
        },
    ];
    const last_update = { update: data && data.meta.last_updated };
    const updata = [
        {
            id: 1,
            title: "Confirmed cases",
            value: data && data.total.confirmed,
        },
        {
            id: 2,
            title: "Active cases",
            value: data && data.delta21_14.confirmed,
        },
        {
            id: 3,
            title: "Recovered cases",
            value: data && data.total.recovered,
        },
        {
            id: 4,
            title: "Total deceased",
            value: data && data.total.deceased,
        },
    ];
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
    return (
        <div
            id="dark"
            className="m-0 p-0 flex flex-col w-screen dark:bg-primary"
        >
            <div className="mt-5 flex flex-row justify-center dark:bg-primary w-screen text-2xl text-red-800   h-12 text-center align-center center m-auto p-auto">
                <div className="dark:text-white">
                    <strong>Maharajganj</strong> Corona Tracker
                </div>
                <div className="dark:text-white">
                    {visible ? (
                        <FaMoon
                            className="cursor-pointer text-white"
                            onClick={handleButton}
                        />
                    ) : (
                        <FaSun
                            className="cursor-pointer text-primary"
                            onClick={handleButton}
                        />
                    )}
                </div>
            </div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    <div className="flex flex-col">
                        <div className="dark:bg-primary dark:text-white underline font-semibold text-blue-800 text-xl">
                            Corona Cases in Maharajganj
                        </div>

                        <div className="flex dark:bg-primary flex-row flex-wrap justify-center items-center">
                            {mrjData.map((mrj) => {
                                return (
                                    <div key={mrj.id}>
                                        <MrjData
                                            title={mrj.title}
                                            value={mrj.value}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <div className="dark:bg-primary dark:text-white  underline  font-semibold text-blue-800 text-xl">
                            Corona Cases in Uttar Pradesh
                        </div>
                        <div className="dark:bg-primary center text-center">
                            <span className="text-red-800">*</span>
                            <strong className="dark:text-white mr-4">
                                last updated:
                            </strong>
                            <span className="dark:text-white">
                                {last_update.update}
                            </span>
                        </div>

                        <div className="dark:bg-primary flex flex-row flex-wrap justify-center">
                            {updata.map((up) => {
                                return (
                                    <div id={up.id}>
                                        <UpData
                                            title={up.title}
                                            value={up.value}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
