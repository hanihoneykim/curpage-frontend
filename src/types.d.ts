export interface IPhoto {
    photo: string;
    pk:number;
    user:IUserBy;
}

export interface IPhotoDetail {
    created_at: string;
    updated_at: string;
    description: string;
    title:string;
    user:IUserBy;
    tags:ITag[];
    photo:string;
    comments:IComment[];
}

export interface ITextDetail {
    created_at: string;
    updated_at: string;
    title:string;
    body: string;
    user:IUserBy;
    tags:ITag[];
    comments:IComment[];
    total_likes:number;
}

export interface IText {
    pk:number;
    title:string;
    user:IUserBy;
}


export interface IUserBy {
    name:string;
    profile_photo:string;
}

export interface IComment {
    comment:string;
    user:{
        name:string
    }
}

export interface ITag {
    name:string;
    pk:number;
}

export interface IHome {
    pk: number;
    photo: string;
    title:string;
    user:IUserBy;
    photos:{
        pk:number;
        photo:string;
    }[];
    videos:{
        pk:number;
        title:string;
        video:string;
    }[];
    texts:{
        pk:number;
        title:string;
        user:{
            name:string;
        }
    }[];
}

export interface IUser {
    last_login: string;
    username: string;
    email: string;
    date_joined: string;
    avatar: string;
    name: string;
    is_host: boolean;
    gender: string;
    language: string;
    currency: string;
}

export interface IUserInfo {
    name:string;
    username: string;
    email: string;
    avatar: string;
    count_followers:number;
    count_followings:number;
    count_photos:number;
    count_texts:number;
    total_photos:{
        image_url:string;
        pk:number;
    }[];
    total_texts:string;
    total_followers:string;
    total_following:string;
    image_url:string;
    pk:number;
    title:string;
}