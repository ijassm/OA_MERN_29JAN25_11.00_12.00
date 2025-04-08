import { createBrowserRouter, Navigate } from "react-router"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";

export const router = createBrowserRouter([
    {
        path: "/home",
        Component: Home,
    },
    {
        path: "/",
        element: <Navigate to="home" />,
    },
    {
        path: "about",
        Component: About,
    },
    {
        path: "contact",
        Component: Contact,
    },
]);