import React, { useState, useEffect } from "react";
function MrjData() {
    const url = "https://data.covid19india.org/v4/min/data.min.json";
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const value = "m-10 p-auto text-2xl text-white";
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.UP.districts.Maharajganj);
            console.log(jsonData.UP.districts.Maharajganj);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <div>
            <div>
                {loading ? (
                    <h1>loading...</h1>
                ) : (
                    <div className="flex flex-col justify-center center">
                        <p className="m-auto tracking-widest underline text-justify font-semibold text-blue-800 text-xl">
                            Corona Cases in Maharajganj
                        </p>
                        <div className="flex flex-row flex-wrap justify-center items-center">
                            {/* <div className="text-center  text-2xl border-separate border-red rounded-xl m-5 py-5 h-60 w-60  bg-red-400 border-solid border-red-700 border-opacity-15 border-4 hover:bg-red-600 hover:scale-125 cursor-pointer">
                                Total population
                                <hr className="m-5" />
                                <div className={value}>
                                    {data && data.meta.population}
                                </div>
                            </div> */}

                            <div className="text-center  text-2xl border-separate border-red rounded-xl m-5 py-5 h-60 w-60  bg-red-400 border-solid border-red-700 border-opacity-15 border-4 hover:bg-red-600 hover:scale-125 cursor-pointer">
                                Confirmed cases
                                <hr className="m-5" />
                                <div className={value}>
                                    {data && data.total.confirmed}
                                </div>
                            </div>

                            <div className="text-center  text-2xl border-separate border-red rounded-xl m-5 py-5 h-60 w-60 bg-red-400 border-solid border-red-700 border-opacity-15 border-4 hover:bg-red-600 hover:scale-125 cursor-pointer">
                                Active cases
                                <hr className="m-5" />
                                <div className={value}>
                                    {data && data.delta21_14.confirmed}
                                </div>
                            </div>

                            <div className="text-center  text-2xl border-separate border-red rounded-xl m-5 py-5 h-60 w-60  bg-red-400 border-solid border-red-700 border-opacity-15 border-4 hover:bg-red-600 hover:scale-125 cursor-pointer">
                                Recovered cases
                                <hr className="m-5" />
                                <div className={value}>
                                    {data && data.total.recovered}
                                </div>
                            </div>

                            <div className="text-center  text-2xl border-separate border-red rounded-xl m-5 py-5 h-60 w-60  bg-red-400 border-solid border-red-700 border-opacity-15 border-4 hover:bg-red-600 hover:scale-125 cursor-pointer">
                                Total deaths
                                <hr className="m-5" />
                                <div className={value}>
                                    {data && data.total.deceased}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MrjData;
