import { Avatar, Box, Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Grid, HStack, Icon, IconButton, Radio, RadioGroup, Stack, Text, VStack, background, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import React from "react";
import { FaBox, FaHeart, FaHome, FaSlackHash, FaUser, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import {TfiWrite } from "react-icons/tfi";
import { HiMenu } from "react-icons/hi";
import useUser from "../lib/useUser";
import IUser from "../types";


interface SideBarProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
export default function SideBar({ isOpen, onClose, onOpen}: SideBarProps) {
    const { userLoading, isLoggedIn, user } = useUser();
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
                <DrawerHeader py={7} borderBottomWidth='1px'>자신을 표현해 보세요 !</DrawerHeader>
                <DrawerBody>

                    <Grid templateColumns={"repeat(1, 1fr)"} my={3}>
                        <Link to={"api/v1/photos"}>
                            <HStack w="100%" h={14} mb={3} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                    <Text fontSize={26} ml={5} mr={8}><AiFillPicture /></Text>
                                    <Text fontWeight={"bold"} fontSize={18}>사진</Text>
                            </HStack>
                        </Link>
                        <Link to={"api/v1/texts"}>
                            <HStack w="100%" h={14} mb={3} cursor={"pointer"} _hover={{background:"rgba(0,0,0,0.2)", borderRadius:"20px"}}>
                                <Text fontSize={26} ml={5} mr={8}><TfiWrite /></Text>
                                <Text fontWeight={"bold"} fontSize={18}>글</Text>
                            </HStack>
                        </Link>
                    </Grid>
                    <Divider my={3} mb={8} />



                    <Grid templateColumns={"repeat(1, 1fr)"} my={3}>
                        <Link to={"api/v1/users/me"}>
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
                    </Grid>

                {/*
                    <Text mt={10} mb={8} ml={5} fontSize={15} fontWeight={"bold"}>업데이트 한 팔로워</Text>
                    <Box w="100%" h={96} overflow={"auto"} overflowY={"scroll"}>
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
    */}

                </DrawerBody>

            </DrawerContent>
            </Drawer>
        </>
        )
}