import { Alert, AlertIcon, AlertTitle, Box, Button, Flex, Grid, HStack, Spinner, Stack, Text } from "@chakra-ui/react";
import HomePhoto from "../components/follow/FollowPhoto";
import LookPhoto from "../components/LookPhoto";
import { useQuery } from "@tanstack/react-query"
import { getLookPhotos } from "../api";
import { IPhoto } from "../types";
import { AiFillPicture } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function LookPhotoList() {
    const { isLoading, data } = useQuery<IPhoto[]>(["photos"], getLookPhotos);
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
                <AlertTitle>잘못된 경로입니다.</AlertTitle>
            </Alert>
        ) // 데이터가 없을 때 표시할 UI
    }
    

    return (
        <>
        <HStack justifyContent={"space-between"} w="88%" ml={24} mt={10}>
            <HStack>
                <Text fontSize={22} fontWeight={900} mr={2}><AiFillPicture /></Text>
                <Text fontSize={20} fontWeight={900}>Photos</Text>
            </HStack>
            <Link to="/api/v1/photos/uploads">
                <Button size='md' fontSize={14} colorScheme='gray'>사진 업로드</Button>
            </Link>
        </HStack>
        
        <Box pt={16} pl={24} pr={20} w="100%" h="100%" overflow={"auto"} overflowY={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
            <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
                {Array.isArray(data) && data?.map(photo => <LookPhoto photo={photo.photo} pk={photo.pk} user={{name:photo.user.name, profile_photo:photo.user.profile_photo}} />)}
            </Grid>
        </Box>

        </>
    )
}