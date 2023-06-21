import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IPhotoProps {
    photo: string;
    pk:number;
    
}

export default function LookHomePhoto({photo, pk}:IPhotoProps){
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