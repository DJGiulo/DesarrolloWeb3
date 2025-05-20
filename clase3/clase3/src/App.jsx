import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import componente1 from './assets/componente1/componente1'
import contador from './assets/contador/contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <componente1/>
    <contador/>

    </>
  )
}

export default App
