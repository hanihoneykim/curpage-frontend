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
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useToast,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "@tanstack/react-query";


export default function Header(){
    const { userLoading, isLoggedIn, user } = useUser();
    const { isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen } = useDisclosure();
    const { isOpen:isSignupOpen, onClose:onSignupClose, onOpen:onSignupOpen} = useDisclosure();
    const { isOpen:isSideOpen, onClose:onSideClose, onOpen:onSideOpen} = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(FaMoon, FaSun);  //컴포넌트 일때는 첫 글자 무조건 대문자
    const logoColor  = useColorModeValue("blue.500", "blue.200");
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState("");
    const toast = useToast();
    const queryClient = useQueryClient();
    const onLogOut = async() => {
        const toastId = toast({
            title:"Login Out...",
            description:"Sad to see you go...",
            status:"loading",
        })
        await logOut();
        queryClient.refetchQueries(['me']);
        toast.update(toastId, {
            title:"Good Bye!",
            description:"See you later!",
            status:"success",
        })
    }

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
                {/*
                <Select value={selectedOption} onChange={handleOptionChange} mb={6} mt={12} ml={20} bg='rgba(255,255,255,0.1)' borderColor='rgba(255,255,255,0.1)' color='white' w={44} h={10}>
                    <option value='/'>둘러보기</option>
                    <option value='/follow-timeline'>팔로잉</option>
                </Select>
                */}
                {!userLoading ? (
                    !isLoggedIn ? ( 
                <>
                <IconButton onClick={toggleColorMode} aria-label="Toggle dark mode" variant={"ghost"} icon={<Icon />} />
                <Button onClick={onLoginOpen}>Log In</Button>
                <Button onClick={onSignupOpen} colorScheme={"blue"}>Sign Up</Button>    
                </>
                ) : ( 
                <Box mr={12}>
                    <IconButton pt={4} mr={7} onClick={toggleColorMode} aria-label="Toggle dark mode" variant={"ghost"} icon={<Icon />} />
                    <Menu>
                        <MenuButton>
                            <Avatar name={user.name} src={user.profile_photo} size={'md'} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={onLogOut}>Log out</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                )) : null}
                
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose}/>
        </HStack>
    )
}