import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1/"
})

export const getLookPhotos = () => instance.get("photos/").then(response => response.data)

export const getPhotoDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, photoPk] = queryKey;
    return instance.get(`photos/${photoPk}`).then((response) => response.data);
};
