import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { IHome, IUser } from "../types";
import { getMe } from "../api";
import useUser from "../lib/useUser";

export default function MyPage(){
    const { isLoading, data } = useQuery<{ users:IUser[]; photos: IHome[]; texts: IHome[];  }>(
        ["users","texts","photos"],
        getMe,
        ); 
    const { userLoading, isLoggedIn, user } = useUser();
    

    if (isLoading) {
        return <div>Loading...</div>; // 로딩 중일 때 표시할 UI
    }
    
    if (!data) {
    return <div>No data available</div>; // 데이터가 없을 때 표시할 UI
    }

    return (
        <VStack w="100%">
            <Flex mt={16} w="100%" justifyContent={"center"} alignItems={"center"}>
                <Avatar name={user.name} src={user.profile_photo} w={44} h={44} />
                <VStack ml={10}>
                    <Text fontWeight="900" fontSize={24}>{user.name}</Text>
                </VStack>    
            </Flex>
        </VStack>
    )
}