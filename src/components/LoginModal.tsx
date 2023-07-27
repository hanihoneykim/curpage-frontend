import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import  SocialLogin from "./SocialLogin";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUsernameLogInError, IUsernameLogInSuccess, IUsernameLogInVariables, usernameLogIn } from "../api";


interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface IForm {
    username:string;
    password:string;
}

export default function LoginModal({ isOpen, onClose} : LoginModalProps){
    const { register, handleSubmit, formState:{errors} } = useForm<IForm>();
    const toast = useToast();
    const queryClient = useQueryClient();
    const mutation = useMutation(usernameLogIn, {
        onMutate : () => {
            console.log("mutation stating")
        },
        onSuccess : (data) => {
            toast({
                title:"환영합니다!",
                description:"자신을 표현해보세요!",
                status:"success",
            })
            onClose();
            queryClient.refetchQueries(['me'])
        },
        onError : (error) => {
            console.log("mutation on error")
        }
    });
    const onSubmit = ({username, password}:IForm) => {
        mutation.mutate({username, password})
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log In</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
                        <VStack>
                            <InputGroup>
                                <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaUserAlt/>
                                </Box>}/>
                                <Input isInvalid={Boolean(errors.username?.message)} {...register("username", {required:"아이디를 입력해주세요"})} variant={"filled"} placeholder="ID"/>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaLock/>
                                </Box>} />
                                <Input isInvalid={Boolean(errors.password?.message)} {...register("password", {required:"비밀번호를 입력해주세요"})} type="password" variant={"filled"} placeholder="PASSWORD"/>
                            </InputGroup>
                        </VStack>
                        <Button isLoading={mutation.isLoading} type="submit" mt={4} colorScheme={"blue"} w="100%">
                            Log in
                        </Button>
                        <SocialLogin />
                    </ModalBody>
                </ModalContent>
            </Modal>
    )
}