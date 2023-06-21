import { Box, Button, Grid, HStack, IconButton, Image, Select, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { relative } from "path";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight, FaArrowCircleRight } from "react-icons/fa";
import FollowVideo from "../components/FollowVideo";
import FollowText from "../components/FollowText";
import { useState } from "react";
import LookHomePhoto from "../components/LookHomePhoto";
import { isError, useQuery } from "@tanstack/react-query";
import { HomeLook } from "../api";
import { IHome } from "../types";
import { error } from "console";

export default function LookAround() {
    const gray = useColorModeValue("gray.600", "gray.300")
    const { isLoading, data} = 
        useQuery<{ photos: IHome[]; texts: IHome[]; videos: IHome[]; }>(["photos"], HomeLook)

    /*
    console.log(data)
    console.log(Array.isArray(data))
    console.log(data?.photos)
    */
    
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
            

            <Box mr={10} pl={14} w="100%" h="35rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={10} gridAutoFlow={"column"} gridTemplateColumns="repeat(6, 1fr)" gridTemplateRows="repeat(2, 1fr)">
                {data?.photos.slice(0, 14).map(home => (
                    <LookHomePhoto photo={home.photo} pk={home.pk} />))}
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
                    <FollowVideo />
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
                    <FollowText />

                </Grid>
            </Box>

        </VStack>
        </>
    )
}