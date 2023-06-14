export interface IPhotoDetail {
    created_at: string;
    updated_at: string;
    description: string;
    user:{
        name:string;
    }
    tags:{
        name:string;
    }
    title:string;
    photo:string;
}