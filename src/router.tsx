import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import MyPage from "./routes/MyPage";


const router = createBrowserRouter([{
    path:"/",
    element:<Root/>,
    errorElement:<NotFound/>,
    children:[
        {
            path:"",
            element:<Home/>,
        },
        {
            path:"users/me",
            element:<MyPage/>,
        },
    ]
}])

export default router;