import { Alert, AlertIcon, AlertTitle, Box, Flex, Grid, Spinner, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import ProtectedPage from "../components/ProtectedPage";
import { useQuery } from "@tanstack/react-query";
import { IMyLikes } from "../types";
import { getMyLikes } from "../api";
import useUser from "../lib/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MyPagePhotos } from "../components/MyPagePhotos";
import { MyPageTexts } from "../components/MyPageTexts";

export default function MyLikes() {
    const { isLoading, data } = useQuery<{likes_photos: IMyLikes[]; likes_texts: IMyLikes[];  }>(
        ["likes_texts","likes_photos"],
        getMyLikes,
        ); 
    const { userLoading, isLoggedIn, user } = useUser();
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
            <VStack w="100%" mt={20}>
                <Text fontWeight={"900"} fontSize={28} mb={10}>Likes</Text>
                <Tabs>
                    <TabList>
                        <Tab>사진</Tab>
                        <Tab>글</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box w="50rem" h="35rem" mt={10}>
                                <Grid gap={10} ml={3} gridAutoFlow={"row"} gridTemplateColumns="repeat(4, 1fr)">
                                    {data && data?.likes_photos && data?.likes_photos.map((likes_photos) => (
                                        <MyPagePhotos image_url={likes_photos.photo_url} pk={likes_photos.photo_pk} key={likes_photos.photo_pk} /> // photo와 pk prop을 전달
                                    ))}
                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box w="50rem" h="35rem" mt={10}>
                                <Grid gap={10} ml={3} gridAutoFlow={"row"} gridTemplateRows={"repeat(1,1fr)"}>
                                    {data && data?.likes_texts && data?.likes_texts.map((text) => (
                                        <MyPageTexts title={text.text_title} pk={text.text_pk} />
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