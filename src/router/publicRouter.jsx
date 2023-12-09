import Auth from "../pages/Auth/Auth";
import Home from "../pages/home/Home";

// public router
const publicRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/',
        element: <Auth />
    }
]

// export
export default publicRouter;