import { useState } from "react"

function App() {
  let [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-l" style={{backgroundColor: "red", fontWeight: 500}}>Red</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-l" style={{backgroundColor: "green", fontWeight: 500}}>Green</button>

          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-l" style={{backgroundColor: "orange", fontWeight: 500}}>Orange</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-l" style={{backgroundColor: "blue", fontWeight: 500}}>Blue</button>

          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-2xl text-white shadow-l" style={{backgroundColor: "black", fontWeight: 500}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
