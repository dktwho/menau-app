import './App.css'
import {Button, ButtonAlt} from "./components/Button/Button.tsx";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState<number>(0)

  return (
    <>
        <div>{counter}</div>
        <Button onClick={()=> setCounter(prev => prev + 1)}>Some button</Button>
        <ButtonAlt onClick={()=> console.log('btnalt')}>Some button Alt</ButtonAlt>
    </>
  )
}

export default App
