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
    useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "../components/ProtectedPage";
import useUser from "../lib/useUser";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { uploadPhoto } from "../api";

interface IForm {
    title:string;
    photo:FileList;
    description:string;
    user:string;
    tags:string[];
} //models의 이름과 같아야함
export default function UploadPhoto() {
    const { register, handleSubmit } = useForm<IForm>()
    const { user, isLoggedIn, userLoading } = useUser();
    const toast = useToast();
    const onSubmit = async (data:any) => {
        try {
        const response = await uploadPhoto(data);
        // 이미지 업로드가 성공한 경우 처리
        toast({
            title: "Upload Successful",
            description: "Your photo has been uploaded successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        } catch (error) {
        // 이미지 업로드가 실패한 경우 처리
        toast({
            title: "Upload Failed",
            description: "There was an error uploading your photo.",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
        }
    };
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
                <VStack onSubmit={handleSubmit(onSubmit)} as="form" spacing={5} mt={5}>
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
                    <Button type="submit" w="full" colorScheme={"gray"}>
                        Upload photos
                    </Button>
                </VStack>
                </Container>
            </Box>
        </ProtectedPage>
    )
}