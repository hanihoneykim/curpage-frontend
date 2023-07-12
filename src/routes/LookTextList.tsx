import { getLookTexts } from "../api";
import { useQuery } from "@tanstack/react-query"
import { getLookPhotos } from "../api";
import { IText } from "../types";
import { Box, Grid, VStack } from "@chakra-ui/react";
import LookHomeText from "../components/LookHomeText";
import TextList from "../components/TextList";


export default function LookTextList() {
    const { isLoading, data } = useQuery<IText[]>(["texts"], getLookTexts);
    if (isLoading) {
        return <div>Loading...</div>; // 로딩 중일 때 표시할 UI
    }
    
    if (!data) {
    return <div>No data available</div>; // 데이터가 없을 때 표시할 UI
    }
    
    return (
        <>
        <Box p={20}>
            <Grid gap={5} templateColumns={"3fr 1fr"}>
                {Array.isArray(data) && data?.map((text) => (
                    <TextList title={text.title} pk={text.pk} user={{name:text.user.name, profile_photo:text.user.profile_photo}} />
                ))}
            </Grid>
        </Box>
        </>
    )
}