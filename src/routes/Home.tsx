import { Box, Grid, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { relative } from "path";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Home(){
    return (
        <VStack>
            <Box w="100%">
                <HStack alignItems={"flex-start"} ml={16} mt={8} mb={6}>
                    <Text fontWeight={"bold"} fontSize={24}>사진</Text>
                    <IconButton fontSize={20} aria-label="more follower's photos" variant={"unstyled"} icon={<FaAngleDoubleRight />} />
                </HStack>
            </Box>
            
            
            <Box pl={14} w="100%" h="30rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={10} gridAutoFlow={"column"} templateRows={"repeat(2,1fr)"}>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                    <Box w={44} h={44} backgroundColor="gray"></Box>
                </Grid>
            </Box>

            <Box w="100%">
                <HStack alignItems={"flex-start"} ml={16} mb={6}>
                    <Text fontWeight={"bold"} fontSize={24}>비디오</Text>
                    <IconButton fontSize={20} aria-label="more follower's photos" variant={"unstyled"} icon={<FaAngleDoubleRight />} />
                </HStack>
            </Box>

            <Box pl={14} w="100%" h="18rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={10} gridAutoFlow={"column"} templateRows={"repeat(1,1fr)"}>
                    <Box w={72} h={44} backgroundColor="gray"></Box>
                    <Box w={72} h={44} backgroundColor="gray"></Box>
                    <Box w={72} h={44} backgroundColor="gray"></Box>
                    <Box w={72} h={44} backgroundColor="gray"></Box>
                    <Box w={72} h={44} backgroundColor="gray"></Box>
                </Grid>
            </Box>

            <Box w="100%">
                <HStack alignItems={"flex-start"} ml={16} mb={6}>
                    <Text fontWeight={"bold"} fontSize={24}>글</Text>
                    <IconButton fontSize={20} aria-label="more follower's photos" variant={"unstyled"} icon={<FaAngleDoubleRight />} />
                </HStack>
            </Box>

            <Box pl={14} w="100%" h="30rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={5} templateColumns={"repeat(1,1fr)"}>
                    <Box w={"100%"} h={12} backgroundColor="gray"></Box>
                    <Box w={"100%"} h={12} backgroundColor="gray"></Box>
                    <Box w={"100%"} h={12} backgroundColor="gray"></Box>
                    <Box w={"100%"} h={12} backgroundColor="gray"></Box>

                </Grid>
            </Box>

        </VStack>
    )
}