import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";
import {Card} from "./pages/Card/Card.tsx";
import {Error as ErrorPage} from "./pages/Error/Error.tsx";
import {Layout} from "./layout/Menu/Layout.tsx";
import {Product} from "./pages/Product/Product.tsx";
import {PREFIX} from "./helpers/api.ts";
import axios from "axios";
import {AuthLayout} from "./layout/Auth/AuthLayout.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {Register} from "./pages/Register/Register.tsx";
import {RequireAuth} from "./helpers/RequireAuth.tsx";

const Menu = lazy(() => import('./pages/Menu/Menu'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth><Layout/></RequireAuth>,
        children: [
            {
                path: '/',
                element: <Suspense fallback={'loading menu...'}><Menu/></Suspense>
            },
            {
                path: '/card',
                element: <Card/>
            },
            {
                path: `/product/:id`,
                element: <Product/>,
                errorElement: <>Error Element</>,
                loader: async ({params}) => {
                    // return defer({
                    //     data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
                    // })

                    return defer({
                        data: new Promise((resolve, reject) => {
                            setTimeout(() => {
                                axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e))
                            }, 1000)
                        })
                    })

                    // await new Promise<void>((resolve) => {
                    //     setTimeout(() => {
                    //         resolve()
                    //     }, 1000)
                    // })
                    // const {data} = await axios.get(`${PREFIX}/products/${params.id}`)
                    // return data;
                }
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
