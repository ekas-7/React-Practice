import React from 'react';
import { useTheme, ThemeProvider } from './context/Context.jsx';

const Card = () => {
  const { isSun, toggleTheme } = useTheme();

  return (
    <div
      className={`w-64 h-64 flex flex-col justify-center items-center rounded-lg cursor-pointer transition-colors duration-300 ${
        isSun ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
      }`}
      onClick={toggleTheme}
    >
      <div className="text-6xl">{isSun ? '🌞' : '🌜'}</div>
      <p className="mt-4 text-xl">{isSun ? 'Sun Mode' : 'Moon Mode'}</p>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Card />
      </div>
    </ThemeProvider>
  );
}
