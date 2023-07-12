import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ITextDetail } from "../types";
import { getTextDetail } from "../api";
import { Box, Divider, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import Tag from "../components/Tag";
import Comment from "../components/Comment";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa";


export default function TextDetail() {
    const { textPk } = useParams();
    const { isLoading, data } = useQuery<ITextDetail>(["texts", textPk], getTextDetail);
    
    if (isLoading) {
        return <div>Loading...</div>; // 로딩 중일 때 표시할 UI
    }
    
    if (!data) {
    return <div>No data available</div>; // 데이터가 없을 때 표시할 UI
    }

    return (
        <>
        <Box w="100%" h="100%" display={"flex"} justifyContent={"center"}>
            <Box backgroundColor={"rgba(0,0,0,0.2)"} width={"75%"} minH="90vh" pb={32}>
                <VStack p={10}>
                    <Text  mt={10} fontWeight={"bold"} fontSize={24}>{data.title}</Text>

                    <HStack px={10} py={4} w="100%" h={24} display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
                        <Image mt={2} mr={4} w={10} h={10} objectFit={"cover"} src={data?.user.profile_photo} css={{borderRadius:"50px"}}/>
                        <Box>
                            <Text fontSize="20px" fontWeight="bold">{data?.user.name}</Text>
                        </Box>
                    </HStack>
                    <Divider/>

                    <Box py={14}>
                        <Text css={{whiteSpace:"pre-line"}}>{data.body}</Text>
                    </Box>

                    <Box w="100%" display={"flex"} justifyContent={"center"} ml={10} mt={7} mb={10} pb={12}>
                        {data?.tags.map((tag) => (<Tag name={tag.name} />))}
                    </Box>
                    <Divider/>

                    <HStack w="15%" pt={7} display={"flex"} justifyContent={"space-between"}>
                        <IconButton fontSize={25} aria-label="like" variant={"ghost"} icon={<FaHeart />} />
                        <IconButton fontSize={25} aria-label="bookmark" variant={"ghost"} icon={<FaBookmark />} />
                        <IconButton fontSize={25} aria-label="sharez" variant={"ghost"} icon={<FaShare />} />
                    </HStack>
                    <Box pt={10} w="100%" display={"flex"} justifyContent={"flex-start"}>
                        <Text fontWeight={"bold"} fontSize={24}>Comment</Text>
                    </Box>
                    <VStack w="100%" display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} pt={7}>
                        {data?.comments.map((comment) => (<Comment comment={comment.comment} user={{name:comment.user.name}} />))}
                    </VStack>
                </VStack>
            </Box>
        </Box>
        
        </>
    )
}