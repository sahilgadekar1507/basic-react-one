import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <h1 className='text-4xl font-semibold text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-gray-500 bg-gray-800'>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password} 
          className='outline-none w-full py-2 px-4 text-lg bg-gray-100 text-gray-800' 
          placeholder='password' 
          readOnly
          ref={passwordRef}/>
          <button 
          className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-lg font-medium'
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 text-white'>
            <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 text-white'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput' 
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}/>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 text-white'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput' 
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
