import { Button, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { githubLogIn } from "../api";

export default function GithubConfirm(){
    const {search} = useLocation();
    const confirmLogin = async() => {
        const params = new URLSearchParams(search)
        const code = params.get("code")
        if (code) {
            await githubLogIn(code)
        }
    }
    useEffect(() => {
        confirmLogin();
    }, [])
    return <VStack justifyContent={"center"} mt={60}>
        <Heading>로그인 중...</Heading>
        <Text>화면을 끄지 마세요.</Text>
        <Spinner size="lg"/>
    </VStack>;
}