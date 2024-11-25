import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Journal from "./pages/Journal";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/journal",
                element: <Journal/>
            },
            {
                path: "/settings",
                element: <Settings/>
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
