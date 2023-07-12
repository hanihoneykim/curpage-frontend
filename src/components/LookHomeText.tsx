import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface ITextProps {
    pk:number;
    title:string;
    user:{
        name:string;
        profile_photo:string;
    }
}

const LookHomeText: React.FC<ITextProps> = ({ title, user, pk }) =>{
    return (
        <>
        <Link to={`api/v1/texts/${pk}`}>
            <Box w={"100%"} h={12} borderBottom={"1px solid gray"}>
                <Text fontWeight="700" fontSize={22}>{title}</Text>
            </Box>
        </Link>
            <Box w={"100%"} h={12} borderBottom={"1px solid gray"}>
                <HStack>
                    <Image mr={4} w={8} h={8} objectFit={"cover"} src={user.profile_photo} css={{borderRadius:"50px"}}/>
                    <Text>{user.name}</Text>
                </HStack>
            </Box>
        </>
    )
}

export default LookHomeText;