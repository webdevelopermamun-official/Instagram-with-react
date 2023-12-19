import Auth from "../pages/Auth/Auth";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/home/Home";

// public router
const publicRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth',
        element: <Auth />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]

// export
export default publicRouter;