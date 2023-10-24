import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "../components/ProtectedPage";
import useUser from "../lib/useUser";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";

interface IForm {
    title:string;
    photo:FileList;
    description:string;
    user:string;
    tags:string[];
} //models의 이름과 같아야함

export default function UploadPhoto() {
    const { register, watch } = useForm<IForm>()
    const { user, isLoggedIn, userLoading } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userLoading) {
            if(!isLoggedIn){
                navigate("/");
            }
        }
    }, [isLoggedIn, userLoading, navigate])

    console.log(watch)
    return (
        <ProtectedPage>
            <Box pb={40} mt={10} px={{ base: 10, lg: 40, }}>
                <Container>
                <Heading textAlign={"center"}>사진 업로드</Heading>
                <VStack spacing={5} as="form" mt={5}>
                    <FormControl>
                    <FormLabel>사진 URL</FormLabel>
                            <Input {...register("photo")} type="file" accept="image/*" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>제목</FormLabel>
                        <Input {...register("title",{required:true})} required type="text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>본문</FormLabel>
                        <Textarea {...register("description")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>태그</FormLabel>
                        <Input {...register("tags")} required type="text" />
                        <FormHelperText>쉼표 ( , ) 로 구분해주세요.</FormHelperText>
                    </FormControl>
                    <Button w="full" colorScheme={"gray"}>
                        Upload photos
                    </Button>
                </VStack>
                </Container>
            </Box>
        </ProtectedPage>
    )
}