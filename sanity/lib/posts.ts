import {client} from "./client";
import {Post} from "../types/post";

import {POSTS_QUERY, POST_BY_SLUG_QUERY} from "./queries";

export async function getPosts(): Promise<Post[]> {
    return await client.fetch(POSTS_QUERY);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    return await client.fetch(POST_BY_SLUG_QUERY,{slug})
}
