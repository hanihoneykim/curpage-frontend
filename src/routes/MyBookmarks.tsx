import { Alert, AlertIcon, AlertTitle, Box, Flex, Grid, Spinner, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import ProtectedPage from "../components/ProtectedPage";
import { useQuery } from "@tanstack/react-query";
import { IMyLikes } from "../types";
import { getMyBookmarks, getMyLikes } from "../api";
import useUser from "../lib/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MyPagePhotos } from "../components/MyPagePhotos";
import { MyPageTexts } from "../components/MyPageTexts";

export default function MyBookmarks() {
    const { isLoading, data } = useQuery<{bookmarks_photos: IMyLikes[]; bookmarks_texts: IMyLikes[];  }>(
        ["bookmarks_texts","bookmarks_photos"],
        getMyBookmarks,
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
                <Text fontWeight={"900"} fontSize={28} mb={10}>Bookmarks</Text>
                <Tabs>
                    <TabList>
                        <Tab>사진</Tab>
                        <Tab>글</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box w="50rem" h="35rem" mt={10}>
                                <Grid gap={10} ml={3} gridAutoFlow={"row"} gridTemplateColumns="repeat(4, 1fr)">
                                    {data && data?.bookmarks_photos && data?.bookmarks_photos.map((bookmarks_photos) => (
                                        <MyPagePhotos image_url={bookmarks_photos.photo_url} pk={bookmarks_photos.photo_pk} key={bookmarks_photos.photo_pk} /> // photo와 pk prop을 전달
                                    ))}
                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box w="50rem" h="35rem" mt={10}>
                                <Grid gap={10} ml={3} gridAutoFlow={"row"} gridTemplateRows={"repeat(1,1fr)"}>
                                    {data && data?.bookmarks_texts && data?.bookmarks_texts.map((text) => (
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