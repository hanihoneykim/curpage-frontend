export interface IPhoto {
    photo: string;
    pk:number;
    user:IUserBy;
}

export interface IPhotoDetail {
    created_at: string;
    updated_at: string;
    description: string;
    user:IUserBy;
    tags:ITag[];
    title:string;
    photo:string;
    comments:IComment[];
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