import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserAlt, FaUserCircle, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";


interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignUpModal({onClose, isOpen}: SignUpModalProps) {
    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaUserAlt />
                                </Box>
                            }/>
                            <Input variant={"filled"} placeholder="ID"/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaLock />
                                </Box>
                            }/>
                            <Input variant={"filled"} placeholder="Password"/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaUserCircle />
                                </Box>
                            }/>
                            <Input variant={"filled"} placeholder="NickName"/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="gray.500">
                                    <FaEnvelope />
                                </Box>
                            }/>
                            <Input variant={"filled"} placeholder="Email"/>
                        </InputGroup>
                    </VStack>
                    <Button w="100%" colorScheme="blue" mt={4}>Sign Up</Button>
                    <SocialLogin />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}