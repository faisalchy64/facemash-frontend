import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Media from "../pages/Media";
import PostContent from "../pages/PostContent";

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
                element: <Media />,
            },
            {
                path: "/post/:id",
                element: <PostContent />,
            },
        ],
    },
]);

export default router;
