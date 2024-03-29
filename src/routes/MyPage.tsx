import { Alert, AlertIcon, AlertTitle, Avatar, Box, CircularProgress, Flex, Grid, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import { IUserInfo } from "../types";
import { getMe } from "../api";
import useUser from "../lib/useUser";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MyPagePhotos } from "../components/MyPagePhotos";
import { MyPageTexts } from "../components/MyPageTexts";
import ProtectedPage from "../components/ProtectedPage";


export default function MyPage(){
    const { isLoading, data } = useQuery<{ users:IUserInfo[]; total_photos: IUserInfo[]; total_texts: IUserInfo[];  }>(
        ["users","total_texts","total_photos"],
        getMe,
        ); 
    const { userLoading, isLoggedIn, user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userLoading) {
            if(!isLoggedIn){
                navigate("/");
            }
        }
    }, [isLoggedIn, userLoading, navigate])

    if (isLoading) {
        return (
            <Flex w="100%" h="80vh" justifyContent={"center"} alignItems={"center"}>
                <Stack direction='row' spacing={4}>
                    <Spinner size='xl' />
                </Stack>
            </Flex>
        )
    }
    
    if (!data) {
        return(
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>잘못된 접근입니다.</AlertTitle>
            </Alert>
        ) // 데이터가 없을 때 표시할 UI
    }


    return (
        <ProtectedPage>
            <VStack w="100%">
            <Flex mt={16} mb={16} w="100%" justifyContent={"center"} alignItems={"center"}>
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
                    <Tab>사진</Tab>
                    <Tab>글</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box w="50rem" h="35rem" mt={10}>
                            <Grid gap={10} ml={3} gridAutoFlow={"row"} gridTemplateColumns="repeat(4, 1fr)">
                                {data && data?.total_photos && data?.total_photos.map((total_photos) => (
                                    <MyPagePhotos image_url={total_photos.image_url} pk={total_photos.pk} key={total_photos.pk} /> // photo와 pk prop을 전달
                                ))}
                            </Grid>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box w="50rem" h="35rem" mt={10}>
                            <Grid gap={10} ml={3} gridAutoFlow={"row"} gridTemplateRows={"repeat(1,1fr)"}>
                                {data && data?.total_texts && data?.total_texts.map((text) => (
                                    <MyPageTexts title={text.title} pk={text.pk} />
                                ))}
                            </Grid>
                        </Box>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </VStack>
        </ProtectedPage>
    )
}