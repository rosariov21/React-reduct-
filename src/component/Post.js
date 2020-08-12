import React from 'react';

import PostPage from '../pages/PostsPage'
export const Post = ({ post }) => (
    <article>
        <h2> {post.title}</h2>
        <p>{post.body.substring( 0,100)}</p>
    </article>
)

export default Post