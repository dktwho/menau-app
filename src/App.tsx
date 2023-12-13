import {Button} from "./components/Button/Button.tsx";
import {useState} from "react";
import {Input} from "./components/Input/Input.tsx";
import {Route, Routes} from "react-router-dom";
import {Card} from "./pages/Card/Card.tsx";
import {Menu} from "./pages/Menu/Menu.tsx";

function App() {
    const [counter, setCounter] = useState<number>(0)

  return (
    <>
        <div>{counter}</div>
        <Button onClick={()=> setCounter(prev => prev + 1)}>Some button</Button>
        <Button appearance={'big'}  onClick={()=> setCounter(prev => prev + 1)}>Some button</Button>
        <Input placeholder={'email'}/>
        <div>
            <a href="/">Menu</a>
            <a href="/card">Card</a>
        </div>
        <Routes>
            <Route path={'/'} element={<Menu/>}/>
            <Route path={'/card'} element={<Card/>}/>


        </Routes>
    </>
  )
}

export default App
