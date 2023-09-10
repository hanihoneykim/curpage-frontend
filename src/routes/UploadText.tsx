import { useEffect } from "react";
import ProtectedPage from "../components/ProtectedPage";
import useUser from "../lib/useUser";
import { useNavigate } from "react-router-dom";

export default function UploadText() {
    const { user, isLoggedIn, userLoading } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userLoading) {
            if(!isLoggedIn){
                navigate("/");
            }
        }
    }, [isLoggedIn, userLoading, navigate])
    return (
        <ProtectedPage>
            <h1>upload text</h1>
        </ProtectedPage>
    )
}