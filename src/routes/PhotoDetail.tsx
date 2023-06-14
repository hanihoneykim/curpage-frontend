import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getPhotoDetail } from "../api";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { IPhotoDetail } from "../types";

export default function PhotoDetail() {
    const { photoPk } = useParams();
    const { isLoading, data } = useQuery<IPhotoDetail>([`photos`, photoPk], getPhotoDetail)

    return (
        <>
            <HStack>
                <Box w={96} h={96}>
                    <Image objectFit={"cover"} w="100%" h="100%" src={data?.photo}/>
                </Box>
                <Box w={96} h={96}>
                    <Text>{data?.title}</Text>
                </Box>
            </HStack>
        </>
    )
}