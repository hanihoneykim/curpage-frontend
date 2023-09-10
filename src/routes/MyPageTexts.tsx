import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import { IUserInfo } from "../types";
import { getMyPhotos } from "../api";
import useUser from "../lib/useUser";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


export default function MyPagePhotos(){
    const { isLoading, data } = useQuery<{ users:IUserInfo[]; photos: IUserInfo[]; texts: IUserInfo[];  }>(
        ["users","texts","photos"],
        getMyPhotos,
        ); 
    const { userLoading, isLoggedIn, user } = useUser();
    
    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState("");


    useEffect(() => {
        let newSelectedOption = "";
        if (location.pathname === "/api/v1/users/me/photos") {
            newSelectedOption = "/api/v1/users/me/photos";
        } else if (location.pathname === "/api/v1/users/me/texts") {
            newSelectedOption = "/api/v1/users/me/texts";
        }
        console.log("Selected Option:", newSelectedOption); // 변경된 selectedOption 값 확인
        setSelectedOption(newSelectedOption);
    }, [location.pathname]);

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
                    <Flex w="100%" justifyContent={"flex-start"}>
                        <Text fontWeight="900" fontSize={28}>{user.name}</Text>
                    </Flex>
                    <Flex w="100%" justifyContent={"flex-start"}>
                        <Text fontWeight="400" fontSize={16}>사진 : {user.count_photos}</Text>
                        <Text fontWeight="400" fontSize={16} ml={4}>글 : {user.count_texts}</Text>
                    </Flex>
                    <Flex w="100%" justifyContent={"flex-start"}>
                        <Text fontWeight="400" fontSize={16}>팔로워 : {user.count_followers}</Text>
                        <Text fontWeight="400" fontSize={16} ml={4}>팔로잉 : {user.count_following}</Text>
                    </Flex>
                </VStack>
            </Flex>

            <Tabs>
                <TabList>
                    <Tab as={Link} to="/api/v1/users/me/photos" isSelected={selectedOption === "/api/v1/users/me/photos"}>사진</Tab>
                    <Tab as={Link} to="/api/v1/users/me/texts" isSelected={selectedOption === "/api/v1/users/me/texts"}>글</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </VStack>
    )
}