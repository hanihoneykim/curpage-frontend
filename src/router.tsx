import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import FollowTimeline from "./routes/FollowTimeline";
import NotFound from "./routes/NotFound";
import MyPage from "./routes/MyPage";
import LookAround from "./routes/LookAround";
import LookPhotoList from "./routes/LookPhotoList";
import PhotoDetail from "./routes/PhotoDetail";
import LookTextList from "./routes/LookTextList";
import TextDetail from "./routes/TextDetail";
import GithubConfirm from "./routes/GithubConfirm";
import KakaoConfirm from "./routes/KakaoConfirm";
import MyPagePhotos from "./routes/MyPagePhotos";
import MyPageTexts from "./routes/MyPageTexts";



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
            path:"/api/v1/photos",
            element:<LookPhotoList/>,
        },
        {
            path:"api/v1/photos/:photoPk",
            element:<PhotoDetail/>,
        },
        {
            path:"api/v1/texts",
            element:<LookTextList/>,
        },
        {
            path:"api/v1/texts/:textPk",
            element:<TextDetail/>,
        },
        {
            path:"api/v1/users/me/photos",
            element:<MyPagePhotos/>,
        },
        {
            path:"api/v1/users/me/texts",
            element:<MyPageTexts/>,
        },
        {
            path:"social",
            children:[
                {
                    path:"github",
                    element: <GithubConfirm />,
                },
                {
                    path:"kakao",
                    element: <KakaoConfirm />,
                }
            ]
        }
    ]
}])

export default router;