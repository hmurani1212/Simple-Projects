import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());
    const [color, setColor] = useState(getRandomColor());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
            setColor(getRandomColor());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    const formattedTime = time.toLocaleTimeString();
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    }
    const textStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: color,
    };
    return (
        <div className='text-center'>
            <h1 className={`text-2xl font-bold bg-orange-400`}>Digital Clock</h1>
            <div style={textStyle}>{formattedTime}</div>
        </div>
    );
}

export default Clock;
