import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
    return (
        <Box>
            <HStack my={6}>
                <Divider />
                <Text textTransform={"uppercase"} color="gray.500" fontSize={"xs"} as={"b"}>Or</Text>
                <Divider />
            </HStack>
            <VStack mb={5}>
                <Button w="100%" leftIcon={<FaGithub />} colorScheme="gray">Continue with Github</Button>
                <Button w="100%" leftIcon={<FaComment />} colorScheme="yellow">Continue with Kakao</Button>
            </VStack>
        </Box>
    )
}