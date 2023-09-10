import {
    Box,
    Checkbox,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "../components/ProtectedPage";
import useUser from "../lib/useUser";
import { useEffect } from "react";

export default function UploadPhoto() {
    const { user, isLoggedIn, userLoading } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userLoading) {
            if(!isLoggedIn){
                navigate("/");
            }
        }
    }, [isLoggedIn, userLoading, navigate])
    return (
        <ProtectedPage>
            <Box pb={40} mt={10} px={{ base: 10, lg: 40, }}>
                <Container>
                <Heading textAlign={"center"}>사진 업로드</Heading>
                <VStack spacing={5} as="form" mt={5}>
                    <FormControl>
                    <FormLabel>사진 URL</FormLabel>
                    <Input required type="text" />
                    </FormControl>
                    <FormControl>
                    <FormLabel>제목</FormLabel>
                    <Input required type="text" />
                    </FormControl>
                    <FormControl>
                    <FormLabel>본문</FormLabel>
                    <Textarea />
                    </FormControl>
                    <FormControl>
                    <FormLabel>태그</FormLabel>
                    <Input required type="text" />
                    <FormHelperText>쉼표 ( , ) 로 구분해주세요.</FormHelperText>
                    </FormControl>
                </VStack>
                </Container>
            </Box>
        </ProtectedPage>
    )
}