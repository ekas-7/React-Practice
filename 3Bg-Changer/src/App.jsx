import React, { useState } from 'react';

function App() {
    const [Color, setColor] = useState("white");

    const changeColor = (newColor) => {
        setColor(newColor);
    };

    return (
        <div className='flex flex-col h-screen'>
            <nav className='bg-gray-800 text-white p-4 flex justify-evenly'>
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded' onClick={() => changeColor("red")}>Red</button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded' onClick={() => changeColor("blue")}>Blue</button>
                <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded' onClick={() => changeColor("green")}>Green</button>
                <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded' onClick={() => changeColor("yellow")}>Yellow</button>
                <button className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-8 rounded' onClick={() => changeColor("purple")}>Purple</button>
                <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded' onClick={() => changeColor("orange")}>Orange</button>
                <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-8 rounded' onClick={() => changeColor("indigo")}>Indigo</button>
            </nav>
            <div className='flex-1 duration-200' style={{ backgroundColor: Color }}>
                
            </div>
        </div>
    );
}

export default App;
