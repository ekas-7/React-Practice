import { useState } from "react";

export default function Colorchanger() {
    const [bgColor, setBgColor] = useState("bg-red-500");

    const handleColorChange = (color) => {
        setBgColor(color);
    };

    return (
        <>
            <div className={`h-screen ${bgColor} relative`}>
                <div className="w-4/5 h-10 bg-teal-800 absolute bottom-[10px] left-0 right-0 mx-auto flex justify-around items-center p-8 rounded-full">
                    <button
                        className="text-white bg-orange-500 rounded-full p-2"
                        onClick={() => handleColorChange("bg-orange-500")}
                    >
                        Orange
                    </button>
                    <button
                        className="text-white bg-red-500 rounded-full p-2"
                        onClick={() => handleColorChange("bg-red-500")}
                    >
                        Red
                    </button>
                    <button
                        className="text-white bg-blue-500 rounded-full p-2"
                        onClick={() => handleColorChange("bg-blue-500")}
                    >
                        Blue
                    </button>
                    <button
                        className="text-white bg-green-500 rounded-full p-2"
                        onClick={() => handleColorChange("bg-green-500")}
                    >
                        Green
                    </button>
                    <button
                        className="text-white bg-purple-500 rounded-full p-2"
                        onClick={() => handleColorChange("bg-purple-500")}
                    >
                        Purple
                    </button>
                </div>
            </div>
        </>
    );
}
