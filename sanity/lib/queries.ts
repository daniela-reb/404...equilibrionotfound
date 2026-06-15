export const POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc)
`;

export const POST_BY_SLUG_QUERY =`
*[_type == "post" && slug.current == $slug][0]
`;