import { Box, Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Grid, HStack, Icon, IconButton, Radio, RadioGroup, Stack, Text, VStack, background, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import React from "react";
import { FaBox, FaHeart, FaHome, FaSlackHash, FaUser, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

interface SideBarProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export default function SideBar({ isOpen, onClose, onOpen}: SideBarProps) {
    return (
        <>
            <IconButton onClick={onOpen} variant={'ghost'} aria-label='Drawer' icon={<HiMenu />} fontSize={"2xl"} />
            <Drawer
                variant="default"
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                trapFocus={false}
                closeOnOverlayClick={true}
                blockScrollOnMount={false}
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader py={7} borderBottomWidth='1px'>Hello, Hani</DrawerHeader>

                <DrawerBody>

                    <Grid templateColumns={"repeat(1, 1fr)"} my={3}>
                        <Link to={"/users/me"}>
                            <HStack w="100%" h={14} mb={3} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                    <Text fontSize={26} ml={5} mr={8}><FaHome /></Text>
                                    <Text fontWeight={"bold"} fontSize={18}>마이 페이지</Text>
                            </HStack>
                        </Link>
                        <HStack w="100%" h={14} mb={3} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                            <Text fontSize={26} ml={5} mr={8}><FaHeart /></Text>
                            <Text fontWeight={"bold"} fontSize={18}>좋아요 한 목록</Text>
                        </HStack>
                        <HStack w="100%" h={14} mb={3} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                            <Text fontSize={26} ml={5} mr={8}><FaBox /></Text>
                            <Text fontWeight={"bold"} fontSize={18}>보관함</Text>
                        </HStack>
                        <Divider my={4} />
                        <HStack w="100%" h={14} mb={3} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                            <Text fontSize={26} ml={5} mr={8}><FaSlackHash /></Text>
                            <Text fontWeight={"bold"} fontSize={18}>둘러보기</Text>
                        </HStack>    
                    </Grid>
                    <Divider my={3} mb={8} />

                    <Text mb={8} ml={5} fontSize={15} fontWeight={"bold"}>업데이트 한 팔로워</Text>
                    <Box w="100%" h={80} overflow={"auto"} overflowY={"scroll"}>
                        <Grid templateColumns={"repeat(1, 1fr)"}>
                            <HStack w="100%" h={14} mb={4}cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><FaUserCircle /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>heeheecoding</Text>
                            </HStack>
                            <HStack w="100%" h={14} mb={4} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><FaUserCircle /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>heeheecoding</Text>
                            </HStack>
                            <HStack w="100%" h={14} mb={4} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><FaUserCircle /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>heeheecoding</Text>
                            </HStack>
                            <HStack w="100%" h={14} mb={4} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><FaUserCircle /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>heeheecoding</Text>
                            </HStack>
                            <HStack w="100%" h={14} mb={4} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><FaUserCircle /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>heeheecoding</Text>
                            </HStack>
                            <HStack w="100%" h={14} mb={4} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><FaUserCircle /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>heeheecoding</Text>
                            </HStack>
                            <HStack w="100%" h={14} mb={4} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><FaUserCircle /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>heeheecoding</Text>
                            </HStack>

                        </Grid>
                    </Box>

                </DrawerBody>

            </DrawerContent>
            </Drawer>
        </>
        )
}