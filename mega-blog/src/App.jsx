import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  

  return (
    <>
      <h1>Blog app using Appwrite</h1>
    </>
  )
}

export default App
