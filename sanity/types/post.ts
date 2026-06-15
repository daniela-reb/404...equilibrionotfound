export interface Post {
    _id: string;
    title:string;
    excerpt:string;
    seoTitle?: string;
    seoDescription?: string;
    slug:{
        current: string;
    }
    author?: {
        name: string;
    };
    publishedAt: string;
    body:any;
    mainImage?:{
       asset: {
        _ref: string;
        _type:string;
       };
       alt?: string;
    };
}
