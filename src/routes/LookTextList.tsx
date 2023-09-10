import { getLookTexts } from "../api";
import { useQuery } from "@tanstack/react-query"
import { getLookPhotos } from "../api";
import { IText } from "../types";
import { Alert, AlertIcon, AlertTitle, Box, Button, Flex, Grid, HStack, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import LookHomeText from "../components/LookHomeText";
import TextList from "../components/TextList";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";


export default function LookTextList() {
    const { isLoading, data } = useQuery<IText[]>(["texts"], getLookTexts);
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
        <HStack justifyContent={"space-between"} w="88%" ml={20} mt={10}>
            <HStack>
                <Text fontSize={22} fontWeight={900} mr={2}><TfiWrite /></Text>
                <Text fontSize={20} fontWeight={900}>Texts</Text>
            </HStack>
            <Link to="/api/v1/texts/uploads">
                <Button size='md' fontSize={14} colorScheme='gray'>글 업로드</Button>
            </Link>
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