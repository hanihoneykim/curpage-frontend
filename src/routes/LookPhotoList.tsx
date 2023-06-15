import { Box, Grid } from "@chakra-ui/react";
import HomePhoto from "../components/HomePhoto";
import LookPhoto from "../components/LookPhoto";
import { useQuery } from "@tanstack/react-query"
import { getLookPhotos } from "../api";
import { IPhoto } from "../types";


export default function LookPhotoList() {
    const { isLoading, data } = useQuery<IPhoto[]>(["photos"], getLookPhotos);
    return (
        <>
        <Box pt={16} pl={28} pr={20} w="100%" h="100%" overflow={"auto"} overflowY={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
            <Grid gap={10} gridAutoFlow={"row"} templateColumns={"repeat(4,1fr)"}>
                {data?.map(photo => <LookPhoto photo={photo.photo} pk={photo.pk} user={{name:photo.user.name, profile_photo:photo.user.profile_photo}} />)}
            </Grid>
        </Box>

        </>
    )
}