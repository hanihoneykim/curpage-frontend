import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface ITextProps {
    pk:number;
    title:string;
}

export const MyPageTexts: React.FC<ITextProps> = ({ title, pk }) =>{
    return (
        <>
        <Link to={`/api/v1/texts/${pk}`}>
            <Box w={"95%"} h={12} borderBottom={"1px solid gray"}>
                <Text fontWeight="700" fontSize={18}>{title}</Text>
            </Box>
        </Link>
        </>
    )
}
