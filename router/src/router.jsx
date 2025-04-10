import { createBrowserRouter, Navigate } from "react-router"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { Course } from "./pages/Course.jsx";

export const router = createBrowserRouter([
    {
        path: "/home",
        Component: Home,
    },
    {
        path: "/",
        errorElement: <ErrorPage />,
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
    {
        path: "course",
        Component: Course,
    },
    {
        path: "*",
        Component: NotFoundPage,
    },
]);