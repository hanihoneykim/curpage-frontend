import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, useToast } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserAlt, FaUserCircle, FaUserSecret } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SignUp } from "../api";
import SocialLogin from "./SocialLogin";


interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface IForm {
    name: string;
    email: string;
    username: string;
    password: string;
    currency: string;
    gender: string;
    language: string;
}

export default function SignUpModal({onClose, isOpen}: SignUpModalProps) {
    const { register, handleSubmit, reset } = useForm<IForm>();
    const toast = useToast();
    const queryClient = useQueryClient();
    const mutation = useMutation(SignUp, {
        onSuccess: () => {
        toast({ title: "Welcome!", status: "success" });
        onClose();
        queryClient.refetchQueries(["me"]);
        },
        onError: () => {
        reset();
        },
    });

    const onSubmit = ({
        username,
        password,
        name,
        email,
    }: IForm) => {mutation.mutate({username, email, name, password});
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaUserAlt />
                                </Box>
                            }/>
                            <Input {...register("name", { required: true })} placeholder="ID" variant="filled"/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaLock />
                                </Box>
                            }/>
                            <Input {...register("password", { required: true })} placeholder="password" variant="filled" type="password"/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaUserCircle />
                                </Box>
                            }/>
                            <Input {...register("username", { required: true })} placeholder="username" variant="filled"/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaEnvelope />
                                </Box>
                            }/>
                            <Input {...register("email", { required: true })} placeholder="email" variant="filled"/>
                        </InputGroup>
                    </VStack>
                    <Button isLoading={mutation.isLoading} w="full" colorScheme="red" mt={4} type="submit">Sign Up</Button>
                    <SocialLogin />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}