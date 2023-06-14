import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IPhotoProps {
    photo: string;
    pk:number;
}

export default function LookPhoto(
    {
        photo,
        pk,
        
    }: IPhotoProps
){
    return (
        <>
            <Link to={`${pk}`}>
                <Box w={72} h={72} backgroundColor="gray">
                    <Image minH="72" src={photo}/>
                </Box>
            </Link>
        </>
    )
}