import React, { useState, useEffect } from 'react';

function Stopwatch(props) {
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    const handleStart = () => {
        setStartTime(new Date().getTime());
        setIsRunning(true);
    };

    const handleEnd = () => {
        setIsRunning(false);

    };
    const handleReset = () => {
        setStartTime(0);
        setIsRunning(false);
        setElapsedTime(0);

    }
    return (
        <div>
            <h1 className='text-2xl bg-green-500 text-center'>Project {props.number}: Stopwatch</h1>
            <div className='mx-auto justify-center text-center'>
                <h1 className='text-3xl text-center'>{elapsedTime}</h1>
                <button
                    type="button"
                    className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleStart}
                >
                    Start
                </button>
                <button
                    type="button"
                    className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleEnd}
                >
                    End
                </button>
                <button
                    type="button"
                    className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;
