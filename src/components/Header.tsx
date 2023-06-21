import { FaAirbnb, FaMoon, FaIceCream, FaSun } from "react-icons/fa";
import {
    Box,
    Button,
    HStack,
    IconButton,
    Select,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";


export default function Header(){
    const { isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen } = useDisclosure();
    const { isOpen:isSignupOpen, onClose:onSignupClose, onOpen:onSignupOpen} = useDisclosure();
    const { isOpen:isSideOpen, onClose:onSideClose, onOpen:onSideOpen} = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(FaMoon, FaSun);  //컴포넌트 일때는 첫 글자 무조건 대문자
    const logoColor  = useColorModeValue("blue.500", "blue.200");
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue);
    };
    useEffect(() => {
        const path = location.pathname;
        if (path === "/") {
            setSelectedOption("/");
        } else if (path === "/lookaround") {
            setSelectedOption("/lookaround");
        }
    }, [location]);
    
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
                <Select value={selectedOption} onChange={handleOptionChange} mb={6} mt={12} ml={20} bg='rgba(255,255,255,0.1)' borderColor='rgba(255,255,255,0.1)' color='white' w={44} h={10}>
                    <option value='/'>둘러보기</option>
                    <option value='/follow-timeline'>팔로잉</option>
                </Select>
                <Button onClick={onLoginOpen}>Log In</Button>
                <Button onClick={onSignupOpen} colorScheme={"blue"}>Sign Up</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose}/>
        </HStack>
    )
}