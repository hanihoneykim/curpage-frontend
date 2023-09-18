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
import UploadPhoto from "./routes/UploadPhoto";
import UploadText from "./routes/UploadText";
import MyLikes from "./routes/MyLikes";
import MyBookmarks from "./routes/MyBookmarks";



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
            path:"/api/v1/users/me/likes",
            element:<MyLikes/>,
        },
        {
            path:"/api/v1/users/me/bookmarks",
            element:<MyBookmarks/>,
        },
        {
            path:"/api/v1/photos",
            element:<LookPhotoList/>,
        },
        {
            path:"api/v1/photos/uploads",
            element:<UploadPhoto/>,
        }, //순서에 주의! :Pk보다 uploads가 위에 있어야 photos/--가 안 꼬임
        {
            path:"api/v1/photos/:photoPk",
            element:<PhotoDetail/>,
        },
        {
            path:"api/v1/texts",
            element:<LookTextList/>,
        },
        {
            path:"api/v1/texts/uploads",
            element:<UploadText/>,
        }, //순서 주의!
        {
            path:"api/v1/texts/:textPk",
            element:<TextDetail/>,
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
        },
    ]
}])

export default router;