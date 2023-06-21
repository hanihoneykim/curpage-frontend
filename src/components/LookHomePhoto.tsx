import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IPhotoProps {
    photo: string;
    pk:number;
    
}

export default function LookHomePhoto({photo, pk}:IPhotoProps){
    return (
        <>
        <Link to={`${pk}`}>
            <Box w={44} h={44} backgroundColor="gray">
                <Image minH="44" src={photo}/>
            </Box>
        </Link> 
            
        </>
    )
}