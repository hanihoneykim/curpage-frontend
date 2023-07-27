import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";
export default function SocialLogin() {
    const kakaoParams = {
        client_id:"5bbe0f55441d7daeaf252ad8a81a2c36",
        redirect_uri:"http://127.0.0.1:3000/social/kakao",
        response_type:"code",
    }
    const params = new URLSearchParams(kakaoParams).toString();
    return (
        <Box>
            <HStack my={6}>
                <Divider />
                <Text textTransform={"uppercase"} color="gray.500" fontSize={"xs"} as={"b"}>Or</Text>
                <Divider />
            </HStack>
            <VStack mb={5}>
                <Button as="a" href="https://github.com/login/oauth/authorize?client_id=1c83ba0e1bb2869d2f4c&scope=read:user,user:email" w="100%" leftIcon={<FaGithub />} colorScheme="gray">Continue with Github</Button>
                <Button as="a" href={`https://kauth.kakao.com/oauth/authorize?${params}`} w="100%" leftIcon={<FaComment />} colorScheme="yellow">Continue with Kakao</Button>
            </VStack>
        </Box>
    )
}