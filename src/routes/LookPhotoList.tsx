import { Box, Grid } from "@chakra-ui/react";
import HomePhoto from "../components/FollowPhoto";
import LookPhoto from "../components/LookPhoto";
import { useQuery } from "@tanstack/react-query"
import { getLookPhotos } from "../api";
import { IPhoto } from "../types";


export default function LookPhotoList() {
    const { isLoading, data } = useQuery<IPhoto[]>(["photos"], getLookPhotos);
    if (isLoading) {
        return <div>Loading...</div>; // 로딩 중일 때 표시할 UI
    }
    
    if (!data) {
    return <div>No data available</div>; // 데이터가 없을 때 표시할 UI
    }
    

    return (
        <>
        <Box pt={16} pl={28} pr={20} w="100%" h="100%" overflow={"auto"} overflowY={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
            <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
                {Array.isArray(data) && data?.map(photo => <LookPhoto photo={photo.photo} pk={photo.pk} user={{name:photo.user.name, profile_photo:photo.user.profile_photo}} />)}
            </Grid>
        </Box>

        </>
    )
}