import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import FollowTimeline from "./routes/FollowTimeline";
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
            element:<LookAround/>,
        },
        {
            path:"/api/v1/users/me",
            element:<MyPage/>,
        },
        {
            path:"/follow-timeline",
            element:<FollowTimeline/>,
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