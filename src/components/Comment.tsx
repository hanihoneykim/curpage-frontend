import { HStack, Text } from "@chakra-ui/react";

export interface ICommentProps {
    comment:string;
    user:{
        name:string;
    }
}

export default function Comment({comment, user}:ICommentProps) {
    return (
        <HStack my={3}>
            <Text mr={7} fontWeight={"bold"}>{user.name}</Text>
            <Text>{comment}</Text>
        </HStack>
    )
}