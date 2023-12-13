import {Button} from "./components/Button/Button.tsx";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState<number>(0)

  return (
    <>
        <div>{counter}</div>
        <Button onClick={()=> setCounter(prev => prev + 1)}>Some button</Button>
        <Button appearance={'big'}  onClick={()=> setCounter(prev => prev + 1)}>Some button</Button>
    </>
  )
}

export default App
