import { getLookTexts } from "../api";
import { useQuery } from "@tanstack/react-query"
import { getLookPhotos } from "../api";
import { IText } from "../types";
import { Box, Button, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import LookHomeText from "../components/LookHomeText";
import TextList from "../components/TextList";
import { TfiWrite } from "react-icons/tfi";


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
        <HStack justifyContent={"space-between"} w="88%" ml={20} mt={10}>
            <HStack>
                <Text fontSize={22} fontWeight={900} mr={2}><TfiWrite /></Text>
                <Text fontSize={20} fontWeight={900}>Texts</Text>
            </HStack>
            <Button size='md' fontSize={14} colorScheme='gray'>글 업로드</Button>
        </HStack>

        <Box px={20} pt={14} pb={20}>
            <Grid gap={5} templateColumns={"3fr 1fr"}>
                {Array.isArray(data) && data?.map((text) => (
                    <TextList title={text.title} pk={text.pk} user={{name:text.user.name, profile_photo:text.user.profile_photo}} />
                ))}
            </Grid>
        </Box>
        </>
    )
}