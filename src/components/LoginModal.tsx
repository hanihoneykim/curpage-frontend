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
    VStack,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import  SocialLogin from "./SocialLogin";


interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose} : LoginModalProps){
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log In</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <InputGroup>
                                <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaUserAlt/>
                                </Box>}/>
                                <Input variant={"filled"} placeholder="ID"/>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaLock/>
                                </Box>} />
                                <Input variant={"filled"} placeholder="PASSWORD"/>
                            </InputGroup>
                        </VStack>
                        <Button mt={4} colorScheme={"blue"} w="100%">
                            Log in
                        </Button>
                        <SocialLogin />
                    </ModalBody>
                </ModalContent>
            </Modal>
    )
}