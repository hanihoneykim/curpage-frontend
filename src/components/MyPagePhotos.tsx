import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IHome } from "../types";

interface IPagePhotoProps {
    image_url: string;
    pk:number;
}

export const MyPagePhotos: React.FC<IPagePhotoProps> = ({ image_url, pk }) =>{
    return (
        <>
        <Link to={`/api/v1/photos/${pk}`}>
            <Box w={40} h={40} backgroundColor="gray">
                <Image objectFit={"cover"} w={40} h={40} src={image_url}/>
            </Box>
        </Link>
            
        </>
    )
}
