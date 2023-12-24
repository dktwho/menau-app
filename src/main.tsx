import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Menu} from "./pages/Menu/Menu.tsx";
import {Card} from "./pages/Card/Card.tsx";
import {Error} from "./pages/Error/Error.tsx";
import {Layout} from "./layout/Menu/Layout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Menu/>
            },
            {
                path: '/card',
                element: <Card/>
            },
        ]
    },
    {
        path: '*',
        element: <Error/>
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
