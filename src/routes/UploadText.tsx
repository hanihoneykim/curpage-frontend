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
    Text,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "../components/ProtectedPage";
import useUser from "../lib/useUser";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { IUploadTextVariables, uploadText } from "../api";
import { useMutation } from "@tanstack/react-query";
import { ITextDetail } from "../types";


export default function UploadText() {
    const { register, handleSubmit } = useForm<IUploadTextVariables>()
    const { user, isLoggedIn, userLoading } = useUser();
    const navigate = useNavigate();
    const toast = useToast();
    const onSubmit = (data:IUploadTextVariables) => {
        mutation.mutate(data);
    };
    const mutation = useMutation(uploadText, {
        onSuccess:(data:ITextDetail) => {
            toast({
                status:"success",
                title:"업로드 성공",
            });
            navigate(`/api/v1/texts/${data.id}`)
        },
    });
    
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
                <Heading textAlign={"center"}>글 업로드</Heading>
                <VStack spacing={5} as="form" onSubmit={handleSubmit(onSubmit)} mt={5}>
                    <FormControl>
                    <FormLabel>제목</FormLabel>
                    <Input {...register("title",{required:true})} required type="text" />
                    </FormControl>
                    <FormControl>
                    <FormLabel>본문</FormLabel>
                    <Textarea {...register("body")} size="lg" placeholder="자신을 표현해 보세요!" />
                    </FormControl>
                    <FormControl>
                    <FormLabel>태그</FormLabel>
                    <Input {...register("tags")} type="text" />
                    <FormHelperText>쉼표 ( , ) 로 구분해주세요.</FormHelperText>
                    </FormControl>
                    {mutation.isError ? <Text color="red.500">오류가 발생했습니다.</Text> : null}
                    <Button isLoading={mutation.isLoading} type="submit" colorScheme="gray" size="lg" w="100%">업로드</Button>
                </VStack>
                </Container>
            </Box>
        </ProtectedPage>
    )
}