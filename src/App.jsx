import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Just from './just'

function App() {
  const [count, setCount] = useState(0)

  let powerUp = () => {
    setCount(count + 1)
    if (count === 20) {
      setCount(count)
    }
  }

  let powerDown = () => {
    setCount(count - 1)
    if (count === 0) {
      setCount(count)
    }
  }

  return (
    <>
    <p>count = {count}</p>
    <button onClick={powerUp}>Power Up</button>
    &nbsp;
    <button onClick={powerDown}>Power Down</button>
    <Just />
    </>
  )
}

export default App