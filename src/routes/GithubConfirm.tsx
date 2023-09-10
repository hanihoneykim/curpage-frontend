import { Button, Heading, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { githubLogIn } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function GithubConfirm(){
    const {search} = useLocation();
    const toast = useToast();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const mutation = useMutation(githubLogIn, {
        onSuccess: () => {
            toast({
            status: "success",
            title: "Welcome!",
            description: "Happy to have you back!",
            });
    
            queryClient.refetchQueries(["me"]);
    
            navigate("/");
        },
    });
    const confirmLogin = async() => {
        const params = new URLSearchParams(search)
        const code = params.get("code")
        if (code) {
            mutation.mutate(code)
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