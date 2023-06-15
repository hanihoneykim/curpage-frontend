import { Box, Text, border } from "@chakra-ui/react";
import { ITag } from "../types";

interface ITagsProps {
    name:string;
}

export default function Tag({name}:ITagsProps) {
    return (
        <Box bg={"rgba(0,0,0,0.3)"} css={{borderRadius:"30px"}} mr={3} px={3}>
            <Text fontSize={"14px"}>#{name}</Text>
        </Box>
        
    )
}