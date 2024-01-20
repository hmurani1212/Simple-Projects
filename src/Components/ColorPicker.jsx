import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker() {
    const [color, setColor] = useState('#ffffff'); // Initial color, can be any valid color value

    const handleColorChange = (newColor) => {
        setColor(newColor.hex);
    };
    return (
        <div className='mx-auto text-center'>
            <h2 className='my-5 text-2xl font-bold underline'>Color Picker</h2>
            <div className='flex mx-auto text-center justify-center'>
                <div>
                    <SketchPicker color={color} onChange={handleColorChange} />
                </div>
                <div>
                    <span className='md:ml-12'>Selected Color: {color}</span>
                    <div className='md:ml-12 h-20' style={{ marginTop: '10px', padding: '10px', backgroundColor: color }}>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ColorPicker