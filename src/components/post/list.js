import React from "react"
import PostRow from "./row";
import cn from 'classnames';

const PostList = ({posts, isArchive = false}) => (
    <ul className={cn('post-list', isArchive ? 'archive' : '')}>
        {posts && posts.map((post, index) => (
            <PostRow post={post} isArchive={isArchive} key={index} />
        ))}
    </ul>
);

export default PostList