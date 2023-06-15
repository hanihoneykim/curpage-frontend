import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IPhotoProps {
    photo: string;
    pk:number;
    user:{
        profile_photo:string;
        name:string;
    }
}

export default function LookPhoto(
    {
        photo,
        pk,
        user,
        
    }: IPhotoProps
){
    return (
        <>
        <VStack>
            <Link to={`${pk}`}>
                <Box w={72} h={72} backgroundColor="gray">
                    <Image minH="72" src={photo}/>
                </Box>
            </Link>
            <Link to={`${pk}`}>
                <Box w={72} h={12}>
                    <HStack mt={2} display={"flex"} justifyContent={"flex-start"} alignContent={"center"}>
                        <Image mr={4} w={8} h={8} objectFit={"cover"} src={user.profile_photo} css={{borderRadius:"50px"}}/>
                        <Box>
                            <Text fontSize="14px" fontWeight="bold">{user.name}</Text>
                        </Box>
                    </HStack>
                </Box>
            </Link>
        </VStack>
        </>
    )
}