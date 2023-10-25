import { QueryFunctionContext } from "@tanstack/react-query";
import Cookie from "js-cookie";
import axios from "axios";
import { ITag, IUserBy } from "./types";

const instance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/api/v1/" : "https://backend.curpage.xyz/api/v1/",
    withCredentials:true,
})

const Imageinstance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/api/v1/" : "https://backend.curpage.xyz/api/v1/",
})

const homeInstance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/" : "https://backend.curpage.xyz/",
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

export const getMyLikes = () => instance.get("users/me/likes").then(response => response.data)

export const getMyBookmarks = () => instance.get("users/me/bookmarks").then(response => response.data)

export const getMyPhotos = () => instance.get("users/me/photos").then(response => response.data)

export const getMyTexts = () => instance.get("users/me/texts").then(response => response.data)

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

interface ISignUpVariables {
    name: string;
    email: string;
    username: string;
    password: string;
}

    export const SignUp = ({username, password, email, name}: ISignUpVariables) => instance.post(`users/`,{ username, password, email, name },{
        headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    }).then((response) => response.data);


export const getUserDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, userPk] = queryKey;
    return instance.get(`users/${userPk}`).then((response) => response.data);
};

export interface IUploadTextVariables {
    title:string;
    body:string;
    user:string;
    tags:string[];
} //models와 이름이 같아야함

export const uploadText = (variables:IUploadTextVariables) => instance.post(`texts/`, variables, {
    headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
    },
}).then((response) => response.data);

export interface IPostLikesVariables {
    like:boolean;
    user:string;
    text:string;
    photo:string;
}

export const postLikes = (photoPk: number, like: boolean, user: string) => {
    const variables: IPostLikesVariables = {
        like,
        user,
        text: "",  // 텍스트 관련 정보는 필요 없는 경우 빈 문자열로 설정
        photo: "", // 포토 관련 정보도 필요 없는 경우 빈 문자열로 설정
        };
    
        return instance.post(`photos/${photoPk}/likes`, variables, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
        })
        .then((response) => response.data);
};

export const deleteLike = (photoPk: number) => {
    return instance.delete(`photos/${photoPk}/likes`, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
    })
    .then((response) => response.data);
};

export const getUploadURL = () => {
    return Imageinstance
        .post(`photos/get-url`, null, {
            headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            },
        })
        .then((response) => response.data);
    };


export interface IUploadImageVarialbes {
    photo: FileList;
    uploadURL: string;
}

export const uploadImage = ({ photo, uploadURL }: IUploadImageVarialbes) => {
    const form = new FormData();
    form.append("file", photo[0]);
    return axios
        .post(uploadURL, form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        })
        .then((response) => response.data);
    };

export interface ICreatePhotoVariables {
    description: string;
    photo: string;
    title:string;
    tags:string;
    }
    
export const createPhoto = ({
description,
title,
photo,
tags,

}: ICreatePhotoVariables) =>
Imageinstance
    .post(
    `photos`,
    { description, photo, title, tags },
    {
        headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
    }
    )
    .then((response) => response.data);

{/*
export interface IPostPhotoVariables {
    title:string;
    photo:File;
    description:string;
    tags:string;
}

export const uploadPhoto = (variables:IPostPhotoVariables) => {
    const formData = new FormData();
    formData.append("title", variables.title);
    formData.append("photo", variables.photo);
    formData.append("description", variables.description);
    formData.append("tags", variables.tags)
    console.log(formData)

    return instance
        .post("photos/uploads", formData, {
            headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => response.data);
    };
*/}