import { Button, Heading, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { kakaoLogIn } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function KakaoConfirm(){
    const {search} = useLocation();
    const toast = useToast();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const confirmLogin = async() => {
        const params = new URLSearchParams(search)
        const code = params.get("code")
        if (code) {
            console.log(code)
            const status = await kakaoLogIn(code)
            if(status === 200){
                toast({
                    status:"success",
                    title:"환영합니다!",
                    description:"당신을 표현해 보세요!",
                })
                queryClient.refetchQueries(["me"]);
                navigate("/");
            }
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