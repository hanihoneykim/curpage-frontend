import { FaAirbnb, FaMoon, FaIceCream, FaSun } from "react-icons/fa";
import {
    Box,
    Button,
    HStack,
    IconButton,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import SideBar from "./SideBar";


export default function Header(){
    const { isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen } = useDisclosure();
    const { isOpen:isSignupOpen, onClose:onSignupClose, onOpen:onSignupOpen} = useDisclosure();
    const { isOpen:isSideOpen, onClose:onSideClose, onOpen:onSideOpen} = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(FaMoon, FaSun);  //컴포넌트 일때는 첫 글자 무조건 대문자
    const logoColor  = useColorModeValue("blue.500", "blue.200");
    return (
        <HStack justifyContent={"space-between"} p={10} borderBottomWidth={1}>
            <HStack justifyContent={"flex-start"} spacing={12}>
                <SideBar isOpen={isSideOpen} onClose={onSideClose} onOpen={onSideOpen} />
                <Box color={logoColor}>
                    <Link to={"/"}>
                        <FaIceCream size={"38"}/>
                    </Link>
                </Box>
                </HStack>
            <HStack spacing={5}>
                <IconButton onClick={toggleColorMode} aria-label="Toggle dark mode" variant={"ghost"} icon={<Icon />} />
                <Button onClick={onLoginOpen}>Log In</Button>
                <Button onClick={onSignupOpen} colorScheme={"blue"}>Sign Up</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose}/>
        </HStack>
    )
}