import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import MyPage from "./routes/MyPage";
import LookAround from "./routes/LookAround";
import LookPhotoList from "./routes/LookPhotoList";
import PhotoDetail from "./routes/PhotoDetail";


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
            path:"/api/v1/users/me",
            element:<MyPage/>,
        },
        {
            path:"/lookaround",
            element:<LookAround/>,
        },
        {
            path:"/api/v1/photos",
            element:<LookPhotoList/>,
        },
        {
            path:"api/v1/photos/:photoPk",
            element:<PhotoDetail/>,
        },
    ]
}])

export default router;