import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import React from "react";
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
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
        </>
        )
}