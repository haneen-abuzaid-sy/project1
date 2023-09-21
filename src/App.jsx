import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Test from './components/Test/Test'

function App() {
  const [x, setx] = useState(0)
  return (
    <>
    <Test set = {setx} />
    <p>{x}</p>
    </>
  )
}

export default App
