import { Box, Button, Grid, HStack, IconButton, Image, Select, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { relative } from "path";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import HomePhoto from "../components/HomePhoto";
import HomeVideo from "../components/HomeVideo";
import HomeText from "../components/HomeText";
import { useState } from "react";

export default function LookAround() {
    const gray = useColorModeValue("gray.600", "gray.300")
    return (
        <>

        <VStack>
            <Box w="100%">
                <HStack alignItems={"flex-start"} ml={16} mt={8} mb={6}>
                    <Text color={gray} fontWeight={"bold"} fontSize={24}>사진 둘러보기</Text>
                    <Link to={"/api/v1/photos"}>
                        <IconButton color={gray} fontSize={20} aria-label="more follower's photos" variant={"unstyled"} icon={<FaAngleDoubleRight />} />
                    </Link>
                </HStack>
            </Box>
            
            
            <Box pl={14} w="100%" h="30rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={10} gridAutoFlow={"column"} templateRows={"repeat(2,1fr)"}>
                    {[1,2,3,4].map((index) => (<HomePhoto key={index} /> ))}
                </Grid>
            </Box>

            <Box w="100%">
                <HStack alignItems={"flex-start"} ml={16} mb={6}>
                    <Text color={gray} fontWeight={"bold"} fontSize={24}>비디오 둘러보기</Text>
                    <IconButton color={gray} fontSize={20} aria-label="more follower's photos" variant={"unstyled"} icon={<FaAngleDoubleRight />}  />
                </HStack>    
            </Box>

            <Box pl={14} w="100%" h="18rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={10} gridAutoFlow={"column"} templateRows={"repeat(1,1fr)"}>
                    <HomeVideo />
                </Grid>
            </Box>

            <Box w="100%">
                <HStack alignItems={"flex-start"} ml={16} mb={6}>
                    <Text color={gray} fontWeight={"bold"} fontSize={24}>글 둘러보기</Text>
                    <IconButton color={gray} fontSize={20} aria-label="more follower's photos" variant={"unstyled"} icon={<FaAngleDoubleRight />} />
                </HStack>
            </Box>

            <Box pl={14} w="100%" h="30rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={5} templateColumns={"repeat(1,1fr)"}>
                    <HomeText />

                </Grid>
            </Box>

        </VStack>
        </>
    )
}