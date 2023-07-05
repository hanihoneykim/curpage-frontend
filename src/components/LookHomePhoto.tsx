import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IHome } from "../types";

interface IPhotoProps {
    photo: string;
    pk:number;
}

const LookHomePhoto: React.FC<IPhotoProps> = ({ photo, pk }) =>{
    return (
        <>
        <Link to={`api/v1/photos/${pk}`}>
            <Box w={60} h={60} backgroundColor="gray">
                <Image objectFit={"cover"} w={60} h={60} src={photo}/>
            </Box>
        </Link>
            
        </>
    )
}

export default LookHomePhoto;