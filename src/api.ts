import { QueryFunctionContext } from "@tanstack/react-query";
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


export const getUserDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, userPk] = queryKey;
    return instance.get(`users/${userPk}`).then((response) => response.data);
};