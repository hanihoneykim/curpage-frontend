import { QueryFunctionContext } from "@tanstack/react-query";
import Cookie from "js-cookie";
import axios from "axios";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1/",
    withCredentials:true,
})

const homeInstance = axios.create({
    baseURL:"http://127.0.0.1:8000/",
    withCredentials:true,
})

export const fetchHomeData = async () => {
    const response = await homeInstance.get('');
    return response.data;
};

export const getLookPhotos = () => instance.get("photos/").then(response => response.data)

export const getPhotoDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, photoPk] = queryKey;
    return instance.get(`photos/${photoPk}`).then((response) => response.data);
};

export const getLookTexts = () => instance.get("texts/").then(response => response.data)

export const getTextDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, textPk] = queryKey;
    return instance.get(`texts/${textPk}`).then((response) => response.data);
};

export const getMe = () => instance.get("users/me").then(response => response.data)

export const logOut = () => instance.post(`users/log-out`, null, {
    headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
}).then((response) => response.data);

export const githubLogIn = (code:string) => instance.post(`users/github`, { code }, {
    headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
}).then((response) => response.status);

export const kakaoLogIn = (code:string) => instance.post(`users/kakao`, { code }, {
    headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
}).then((response) => response.status);

export interface IUsernameLogInVariables {
    username:string;
    password:string;
}
export interface IUsernameLogInSuccess {
    OK:string;
}
export interface IUsernameLogInError {
    error:string;
}

export const usernameLogIn = ({username, password}:IUsernameLogInVariables) => instance.post(`users/log-in`, { username, password }, {
    headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
}).then((response) => response.data);
/* mutation 함수는 하나의 argument를 가지지 않고 object를 가져옴 ({username, password} 부분)*/
/* 백엔드의 views-login을 보면서 작성중 */




export const getUserDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, userPk] = queryKey;
    return instance.get(`users/${userPk}`).then((response) => response.data);
};