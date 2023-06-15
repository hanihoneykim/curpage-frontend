import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getPhotoDetail } from "../api";
import { Box, Divider, Grid, HStack, IconButton, Image, Text, VStack, border } from "@chakra-ui/react";
import { IPhotoDetail } from "../types";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa";
import Tag from "../components/Tag";
import Comment from "../components/Comment";

export default function PhotoDetail() {
    const { photoPk } = useParams();
    const { isLoading, data } = useQuery<IPhotoDetail>([`photos`, photoPk], getPhotoDetail)
    return (
        <>
            <HStack px={40} py={16}>
                <Box w="630px" h="630px" mr={10}>
                    <Image objectFit={"cover"} w="100%" h="100%" src={data?.photo}/>
                </Box>

                {/*사진 내용 부분 */}
                <VStack w="630px" h="630px" bg="rgba(0,0,0,0.3)">
                    <HStack px={10} py={4} w="100%" h={24} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                        <Image mt={2} mr={4} w={16} h={16} objectFit={"cover"} src={data?.user.profile_photo} css={{borderRadius:"50px"}}/>
                        <Box>
                            <Text fontSize="20px" fontWeight="bold">{data?.user.name}</Text>
                        </Box>
                    </HStack>
                    <Divider/>
                    
                    {/* 본문 */}
                    <Box w="100%" h="100%" overflow={"hidden"} overflowY={"auto"}>
                        <VStack mt={4} px={10} py={4} w="100%" minH={28} display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                            <Text mb={7} fontSize="20px" fontWeight="bold">" {data?.title} "</Text>
                            <Text fontSize="16px">{data?.description}</Text>
                        </VStack>
                        <Box display={"flex"} ml={10} mt={7} mb={10}>
                            {data?.tags.map((tag) => (<Tag name={tag.name} />))}
                        </Box>
                        <Divider/>
                        <HStack ml={9} mt={8}>
                            <IconButton aria-label="like" variant={"ghost"} icon={<FaHeart />} />
                            <IconButton aria-label="bookmark" variant={"ghost"} icon={<FaBookmark />} />
                            <IconButton aria-label="sharez" variant={"ghost"} icon={<FaShare />} />
                        </HStack>
                        <VStack w="100%" display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} mt={10} ml={12}>
                            {data?.comments.map((comment) => (<Comment comment={comment.comment} user={{name:comment.user.name}} />))}
                        </VStack>
                    </Box>
                </VStack>
            </HStack>
        </>
    )
}