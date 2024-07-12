import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(Math.floor(Math.random() * 201) - 100)
  
  const subValue = () => {
    setCounter(counter - 1)
  }

  const addValue = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <div className='yo'>
        <button onClick={subValue}>-</button>
        <p>Value: {counter}</p>
        <button onClick={addValue}>+</button>
      </div>
    </>
  )
}

export default App
