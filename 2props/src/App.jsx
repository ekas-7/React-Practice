import { useState } from 'react';
import Card from './components/Card';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="bg-green-400 p-4 rounded-xl text-black text-center mb-4">Tailwind</h1>   
      <Card username="ekas" pos="CEO"/>
      <Card username="ekaspreet" pos="CEO yo"/>
    </div>
  );
}

export default App;
