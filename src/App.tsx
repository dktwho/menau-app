import './App.css'
import {Button, ButtonAlt} from "./components/Button/Button.tsx";

function App() {

  return (
    <>
        <Button onClick={()=> console.log('btn')}>Some button</Button>
        <ButtonAlt onClick={()=> console.log('btnalt')}>Some button Alt</ButtonAlt>
    </>
  )
}

export default App
