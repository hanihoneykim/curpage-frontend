import { Alert, AlertIcon, AlertTitle, Box, Button, Divider, Flex, Grid, HStack, IconButton, Image, Select, Spinner, Stack, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { relative } from "path";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight, FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
import LookHomePhoto from "../components/LookHomePhoto";
import { isError, useQuery } from "@tanstack/react-query";
import { fetchHomeData } from "../api";
import { IHome } from "../types";
import { error } from "console";
import LookHomeText from "../components/LookHomeText";

export default function LookAround() {
    const gray = useColorModeValue("gray.600", "gray.300")
    const { isLoading, data } = useQuery<{ photos: IHome[]; texts: IHome[]; videos: IHome[] }>(
    ["photos", "texts"],
    fetchHomeData,
    );
    
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

        <VStack px={10} pb={20}>
            <Box w="100%">
                <Link to={"/api/v1/photos"}>
                    <Button rightIcon={<FaAngleDoubleRight />} ml={8} mt={14} mb={10} size='md' fontSize={16} colorScheme='gray'> 사진 둘러보기 </Button>
                </Link>
            </Box>
            

            <Box mr={10} w="95%" h="35rem" overflow={"auto"} overflowX={"scroll"} css={{'&::-webkit-scrollbar': { display:"none"}}}>
                <Grid gap={10} gridAutoFlow={"column"} gridTemplateColumns="repeat(6, 1fr)" gridTemplateRows="repeat(2, 1fr)">
                {data && data?.photos && data?.photos.map((home) => (
                <LookHomePhoto photo={home.photo} pk={home.pk} key={home.pk} /> // photo와 pk prop을 전달
                ))}
                </Grid>
            </Box>
                

            <Box w="100%" py={10}>
                <Link to={"/api/v1/texts"}>
                    <Button rightIcon={<FaAngleDoubleRight />} ml={8} mt={6} size='md' fontSize={16} colorScheme='gray'> 글 둘러보기 </Button>
                </Link>
            </Box>

            <Box w="95%" h="40rem">
                <Grid gap={5} templateColumns={"3fr 1fr"}>
                    {data && data?.texts && data?.texts.map((text) => (
                        <LookHomeText title={text.title} pk={text.pk} user={{name:text.user.name, profile_photo:text.user.profile_photo}} />
                    ))}
                </Grid>
            </Box>


            {/*
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
                */}

        </VStack>
        </>
    )
}