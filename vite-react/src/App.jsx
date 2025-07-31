import Hello from "./Hello.jsx";
import Counter from "./Counter.jsx";
import Props from "./Props.jsx";

function App() {
  return (
    <>
      {/* <Hello/> */}
      {/* <Counter/> */}

      <div className="Container">
        <Props username="Roman" position="Wresler" />
        <Props username="SRK" position="Actor" />
      </div>
    </>
  );
}

export default App;
