import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { deleteLike, getPhotoDetail, postLikes } from "../api";
import { Box, Divider, Flex, Grid, HStack, IconButton, Image, Text, VStack, border } from "@chakra-ui/react";
import { IPhotoDetail } from "../types";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa";
import Tag from "../components/Tag";
import Comment from "../components/Comment";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useUser from "../lib/useUser";


export default function PhotoDetail() {
    const { photoPk } = useParams();
    const { isLoading, data } = useQuery<IPhotoDetail>([`photos`, photoPk], getPhotoDetail)
    const { user } = useUser();
    const [ isLiked, setIsLiked ] = useState(data?.likes[0]?.is_like || false);
    const [userLiked, setUserLiked] = useState(data?.likes.some(like => like.user.pk === user) || false);
    const [likes, setLikes] = useState(data?.likes[0]?.count_likes || 0);

    const handleLikeClick = async () => {
        try {
            if (userLiked) {
                // 이미 좋아요를 누른 경우
                await deleteLike(photoPk as unknown as number);
                setUserLiked(false); // 좋아요 취소 시 상태 업데이트
            } else {
                // 좋아요
                const response = await postLikes(photoPk as unknown as number, true, user);
                if (response.is_like === true) {
                    setUserLiked(true); // 좋아요 성공 시 상태 업데이트
                }
                // 서버 응답에서 업데이트된 좋아요 카운트를 가져와 업데이트
                const updatedLikes = response.count_likes;
                setLikes(updatedLikes);
            }
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };
    
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
                        <HStack ml={7} mt={5} gap={4}>
                            <Flex alignItems={"center"}>
                                <IconButton aria-label="like" variant={"ghost"} icon={<FaHeart  color={isLiked ? 'red' :'white'}/>} onClick={handleLikeClick} />
                                <Text fontSize={14}>{likes}</Text>
                            </Flex>
                            <IconButton aria-label="bookmark" variant={"ghost"} icon={<FaBookmark />} />
                            <IconButton aria-label="sharez" variant={"ghost"} icon={<FaShare />} />
                        </HStack>
                        <Box pt={8} pl={10}>
                            <Text fontWeight={"bold"} fontSize={18}>Comment</Text>
                        </Box>
                        <VStack w="100%" display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} mt={5} ml={10}>
                            {data?.comments.map((comment) => (<Comment comment={comment.comment} user={{name:comment.user.name}} />))}
                        </VStack>
                    </Box>
                </VStack>
            </HStack>
        </>
    )
}