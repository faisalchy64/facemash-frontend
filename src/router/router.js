import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import Main from "../layout/Main";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Media from "../pages/Media";
import NotFound from "../pages/NotFound";
import PostContent from "../pages/PostContent";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/media",
                element: (
                    <AuthRoute>
                        <Media />
                    </AuthRoute>
                ),
            },
            {
                path: "/post/:id",
                element: (
                    <AuthRoute>
                        <PostContent />
                    </AuthRoute>
                ),
            },
            {
                path: "/about",
                element: (
                    <AuthRoute>
                        <About />
                    </AuthRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
