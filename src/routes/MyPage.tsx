import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import { IUserInfo } from "../types";
import { getMyPhotos } from "../api";
import useUser from "../lib/useUser";

export default function MyPage(){
    return (
        <h1>me</h1>
    )
}