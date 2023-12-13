import {Button} from "./components/Button/Button.tsx";
import {useState} from "react";
import {Input} from "./components/Input/Input.tsx";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Card} from "./pages/Card/Card.tsx";
import {Menu} from "./pages/Menu/Menu.tsx";
import {Error} from "./pages/Error/Error.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>
    },
    {
        path: '/card',
        element: <Card/>
    },
    {
        path: '*',
        element: <Error/>
    },
])

function App() {
    const [counter, setCounter] = useState<number>(0)

    return (
        <>
            <div>{counter}</div>
            <Button onClick={() => setCounter(prev => prev + 1)}>Some button</Button>
            <Button appearance={'big'} onClick={() => setCounter(prev => prev + 1)}>Some button</Button>
            <Input placeholder={'email'}/>
            <div>
                <a href="/">Menu</a>
                <a href="/card">Card</a>
            </div>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
